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
}

export class HeapBox {
    public owner!: ownerInfo
    public value: HeapValue = null;
    public sharedBorrowers: HeapValue[]
    public mutableBorrowers: HeapValue[]
    public constructor(owner: ownerInfo){
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
}