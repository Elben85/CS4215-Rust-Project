import { Heap } from "./heap";
import { addressToValue, Types, valueToAddress, Pointer } from "./types";

/**
 * Heap metadata followed by n bytes of frame addresses
 */
export class Environment implements Types {
    public static getTag(): number { return 0; }

    public static allocate(heap: Heap, numFrames: number): number {
        return heap.reserve(numFrames, this.getTag());
    }

    public static getFrame(heap: Heap, address: number, frameIndex: number): number {
        return heap.get(address + frameIndex + Heap.METADATA_SIZE);
    }

    public static setFrame(heap: Heap, address: number, frameIndex: number, frameAddress: number): void {
        return heap.set(address + frameIndex + Heap.METADATA_SIZE, frameAddress);
    }

    public static extend(heap: Heap, oldEnv: number, frameSize: number): number {
        const oldEnvSize = heap.getSize(oldEnv);
        const newEnv = heap.reserve(oldEnvSize + 1, this.getTag());

        for (let i = 0; i < oldEnvSize; ++i) {
            this.setFrame(
                heap, newEnv, i, this.getFrame(heap, oldEnv, i)
            );
        }

        const frameAddress = Frame.allocate(heap, frameSize);
        this.setFrame(heap, newEnv, oldEnvSize, frameAddress);

        return newEnv;
    }

    public static getValue(heap: Heap, env: number, frameIndex: number, itemIndex: number): number {
        const frameAddress = heap.get(env + frameIndex + Heap.METADATA_SIZE);
        return Frame.getValue(heap, frameAddress, itemIndex);
    }

    public static setValue(heap: Heap, env: number, frameIndex: number, itemIndex: number, value: any) {
        // value is an address to the heap
        const frameAddress = heap.get(env + frameIndex + Heap.METADATA_SIZE);
        Frame.setValue(heap, frameAddress, itemIndex, value);
    }
}

/**
 * Heap metadata followed by n pointers
 */
class Frame implements Types {
    public static getTag(): number { return 1; }

    private static indexToOffset(index: number): number {
        return (Heap.METADATA_SIZE + 1) * index
    }

    public static allocate(heap: Heap, numVariables: number): number {
        return heap.reserve(this.indexToOffset(numVariables), this.getTag());
    }

    public static setValue(heap: Heap, address: number, index: number, value: any): void {
        this.checkValidAccess(heap, address, index);
        const itemAddress = valueToAddress(heap, value);
        const pointerAddress = address + Heap.METADATA_SIZE + this.indexToOffset(index)
        Pointer.setPointer(heap, pointerAddress, itemAddress)
    }

    public static getValue(heap: Heap, address: number, index: number): any {
        this.checkValidAccess(heap, address, index);
        const pointerAddress = address + Heap.METADATA_SIZE + this.indexToOffset(index);
        const itemAddress = Pointer.addressToValue(heap, pointerAddress);
        return addressToValue(heap, itemAddress)
    }

    private static checkValidAccess(heap: Heap, address: number, index: number) {
        if (heap.getTag(address) !== this.getTag()) {
            throw new Error(`Trying to set a value of a non-Frame, got tag: ${heap.getTag(address)}`)
        }

        const frameSize = heap.getSize(address);
        if (frameSize <= index) {
            throw new Error(`Invalid index: Trying to access frame of size ${frameSize} at ${index}`);
        }
    }
}
