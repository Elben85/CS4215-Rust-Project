export class ownerInfo {
    public symbol: string;
    public box!: HeapBox;

    public constructor(
        symbol: string,
        memory: HeapValue | null
    ) {
        this.symbol = symbol;
        this.box = new HeapBox(this);
        if (memory === null) return;
        this.box.setMemory(memory.copyIfPossible());
    };

    public getUnderlyingBox(): HeapValue {
        return this.box.value;
    }

    public copyWithCache(cache: Map<any, any>): ownerInfo {
        let copy: ownerInfo;
        if ((copy = cache.get(this)) !== undefined) {
            return copy;
        }

        copy = new ownerInfo(this.symbol, null);
        cache.set(this, copy);
        copy.box = this.box.copyWithCache(cache);
        return copy;
    }
}

export class HeapBox {
    public owner!: ownerInfo
    public value: HeapValue = null;
    public sharedBorrowers: HeapValue[]
    public mutableBorrowers: HeapValue[]
    public constructor(owner: ownerInfo) {
        this.sharedBorrowers = [];
        this.mutableBorrowers = [];
        this.owner = owner
    };

    public drop() {
        if (this.value) {
            this.value.drop();
        }
    }

    public isValid() {
        return (this.value !== null) && (this.value.isValid());
    }

    public addBorrow(box: HeapValue, mutable: boolean) {
        mutable
            ? this.addMutableBorrow(box)
            : this.addSharedBorrow(box)
    }

    public addMutableBorrow(box: HeapValue) {
        if (this.sharedBorrowers.length > 0) {
            this.sharedBorrowers = []
        }
        this.mutableBorrowers = [box];
    }

    public addSharedBorrow(box: HeapValue) {
        if (this.mutableBorrowers.length > 0) {
            this.mutableBorrowers = []
        }
        this.sharedBorrowers.push(box);
    }

    public use(user: HeapValue, asMutable: boolean) {
        if (asMutable && this.mutableBorrowers.includes(user)) {
            return;
        } else if ((!asMutable) && this.sharedBorrowers.includes(user)) {
            return;
        } else {
            throw new Error("Invalid borrow");
        }
    }

    public useAsOwner(asMutable: boolean, asLvalue: boolean) {
        this.mutableBorrowers = [];
        if (asMutable) this.sharedBorrowers = [];
        if (asLvalue) return;

        if (this.value === null) return;
        const memory = this.value;

        if (memory.sharedReference) {
            memory.sharedReference.use(memory, false);
        }
        if (memory.mutableReference) {
            memory.mutableReference.use(memory, true);
        }
    }

    public setMemory(memory: HeapValue) {
        if (this.value) this.value.owner = null;
        if (memory.owner) memory.owner.value = null;
        this.value = memory;
        memory.owner = this;
    }

    public copyWithCache(cache: Map<any, any>): HeapBox {
        let copy: HeapBox;
        if ((copy = cache.get(this)) !== undefined) {
            return copy;
        }

        copy = new HeapBox(null);
        cache.set(this, copy);

        copy.owner = this.owner.copyWithCache(cache);
        if (this.value) {
            copy.value = this.value.copyWithCache(cache);
        }

        for (let v of this.sharedBorrowers) {
            copy.sharedBorrowers.push(v.copyWithCache(cache));
        }

        for (let v of this.mutableBorrowers) {
            copy.mutableBorrowers.push(v.copyWithCache(cache));
        }

        return copy;
    }
}

export class HeapValue {
    public owner: HeapBox | null
    public sharedReference: HeapBox | null
    public mutableReference: HeapBox | null
    public isDropped: boolean = false;
    public copyable: boolean

    public constructor(copyable: boolean) {
        this.sharedReference = null;
        this.mutableReference = null;
        this.copyable = copyable
    }

    public registerReference(box: HeapBox, mutable: boolean) {
        if (mutable) this.mutableReference = box;
        else this.sharedReference = box;

        box.addBorrow(this, mutable);
    }

    copyIfPossible(): HeapValue {
        if (!this.copyable) {
            return this
        }
        const copy = new HeapValue(true);
        if (this.sharedReference) copy.registerReference(this.sharedReference, false);
        if (this.mutableReference) copy.registerReference(this.mutableReference, true);
        return copy
    }

    drop(): void {
        this.isDropped = true;
    }

    isValid(): boolean {
        return !this.isDropped
            && ((this.sharedReference === null) || this.sharedReference.isValid())
            && ((this.mutableReference === null) || this.mutableReference.isValid())
    }

    copyWithCache(cache: Map<any, any>): HeapValue {
        let copy: HeapValue;
        if ((copy = cache.get(this)) !== undefined) {
            return copy;
        }

        copy = new HeapValue(this.copyable);
        copy.isDropped = this.isDropped;
        cache.set(this, copy);
        if (this.owner) {
            copy.owner = this.owner.copyWithCache(cache);
        }
        if (this.sharedReference) {
            copy.sharedReference = this.sharedReference.copyWithCache(cache);
        }
        if (this.mutableReference) {
            copy.mutableReference = this.mutableReference.copyWithCache(cache);
        }

        return copy;
    }
}

export function copyEnvironment(env: { [key: string]: ownerInfo }[]): { [key: string]: ownerInfo }[] {
    const cache = new Map<any, any>();
    const newEnv = [];

    for (const frame of env) {
        const newFrame = {};
        newEnv.push(newFrame);

        for (const k of Object.keys(frame)) {
            newFrame[k] = frame[k].copyWithCache(cache);
        }
    }

    return newEnv;
}