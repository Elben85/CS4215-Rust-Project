import { Heap } from './heap';

export const valueToAddress = (heap: Heap, value: any): number => {
    return valueToType(value).allocate(heap, value);
}

export const addressToValue = (heap: Heap, address: number): any => {
    const tag = heap.getTag(address);
    return tagToType(tag).addressToValue(heap, address);
}

const valueToType = (value: any): typeof Types => {
    // NOTE: pointer, environment, and frame should not be passed here
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
        heap.set(address + Heap.METADATA_SIZE, value);
        return address
    }

    public static addressToValue(heap: Heap, address: number): number {
        return heap.get(address + Heap.METADATA_SIZE)
    }
}

class Boolean implements Types {
    public static getTag(): number { return 3; }

    public static allocate(heap: Heap, value: boolean): number {
        const address = heap.reserve(1, this.getTag())
        heap.set(address + Heap.METADATA_SIZE, value ? 1 : 0);
        return address;
    }

    public static addressToValue(heap: Heap, address: number): boolean {
        return heap.get(address + Heap.METADATA_SIZE) === 1 ? true : false;
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

export class Pointer implements Types {
    public static getTag(): number { return 5; }

    public static allocate(heap: Heap, address: number): number {
        const pointerAddress = heap.reserve(1, this.getTag());
        heap.set(pointerAddress + Heap.METADATA_SIZE, address);
        return pointerAddress
    }

    public static addressToValue(heap: Heap, address: number) {
        return heap.get(address + Heap.METADATA_SIZE)
    }

    public static setPointer(heap: Heap, address: number, value: number) {
        heap.set(address + Heap.METADATA_SIZE, value)
    }
}

export class Closure implements Types {
    public static getTag(): number { return 6; }

    public static allocate(heap: Heap, addresses: [number, number, number]): number {
        // addresses = [arity, pc, env_address]

        const arity = addresses[0];
        const pc = addresses[1];
        const envAddress = addresses[2];

        const closureAddress = heap.reserve(1, this.getTag());
        heap.setByteAtOffset(closureAddress, 3, arity); // 4th byte is free
        heap.setTwoByteAtOffset(closureAddress, 4, pc); // 5th & 6th byte is free
        heap.set(closureAddress + Heap.METADATA_SIZE, envAddress);

        return closureAddress
    }

    public static addressToValue(heap: Heap, address: number) {
        return heap.get(address + Heap.METADATA_SIZE)
    }

    public static getClosureEnvironment(heap: Heap, address: number) {
        return heap.get(address + Heap.METADATA_SIZE);
    }

    public static getClosureArity(heap: Heap, address: number) {
        return heap.getByteAtOffset(address, 3);
    }

    public static getClosurePC(heap: Heap, address: number) {
        return heap.getTwoByteAtOffset(address, 4);
    }
}

// TODO
class Int64 { }
