import { Heap } from './heap';

export const tagToType = (tag: number): Types => {
    switch(tag) {
        case Int64.getTag():
            return Int64
        case Boolean.getTag():
            return Boolean
        default:
            throw new Error(`Unrecognized type tag: ${tag}`);
    }
}

abstract class Types {
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

class Int64 {
    public static getTag(): number { return 0; }

    public static allocate(heap: Heap, value: number): number {
        const address = heap.reserve(1, this.getTag())
        heap.set(address, value);
        return address
    }

    public static addressToValue(heap: Heap, address: number): number {
        return heap.get(address)
    }
}

class Boolean {
    public static getTag(): number { return 1; }

    public static allocate(heap: Heap, value: boolean): number {
        const address = heap.reserve(1, this.getTag())
        heap.set(address, value ? 1 : 0);
        return address;
    }

    public static addressToValue(heap: Heap, address: number): boolean {
        return heap.get(address) === 1 ? true : false;
    }
}

// TODO
class Float{}
