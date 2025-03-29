import { Heap } from './heap';

export const valueToAddress = (heap: Heap, value: any): number => {
    return valueToType(value).allocate(heap, value);
}

export const addressToValue = (heap: Heap, address: number): any => {
    const tag = heap.getTag(address);
    return tagToType(tag).addressToValue(heap, address);
}

const valueToType = (value: any): typeof Types => {
    if (value === null) {
        return Void
    } else if (typeof value === 'number') {
        return Float64
    } else if (typeof value === 'boolean') {
        return Boolean
    } else {
        throw new Error(`Unrecognize literal type: ${value}`)
    }
}

const tagToType = (tag: number): typeof Types => {
    switch (tag) {
        case Float64.getTag():
            return Float64
        case Boolean.getTag():
            return Boolean
        case Void.getTag():
            return Void
        default:
            throw new Error(`Unrecognized type tag: ${tag}`);
    }
}

export abstract class Types {
    public static getTag(): number {
        throw new Error("Type tag not defined")
    }

    public static allocate(heap: Heap, value: any): number {
        throw new Error("Type heap allocation not implemented")
    }

    public static addressToValue(heap: Heap, address: number): any {
        throw new Error("Address to value not implemented");
    }
}

class Float64 implements Types {
    public static getTag(): number { return 2; }

    public static allocate(heap: Heap, value: number): number {
        const address = heap.reserve(1, this.getTag())
        heap.set(address, value);
        return address
    }

    public static addressToValue(heap: Heap, address: number): number {
        return heap.get(address)
    }
}

class Boolean implements Types {
    public static getTag(): number { return 3; }

    public static allocate(heap: Heap, value: boolean): number {
        const address = heap.reserve(1, this.getTag())
        heap.set(address, value ? 1 : 0);
        return address;
    }

    public static addressToValue(heap: Heap, address: number): boolean {
        return heap.get(address) === 1 ? true : false;
    }
}

class Void implements Types {
    public static getTag(): number { return 4; }

    public static allocate(heap: Heap, _: any): number {
        return heap.reserve(0, this.getTag());
    }

    public static addressToValue(heap: Heap, address: number) {
        return null
    }
}

// TODO
class Int64 { }
