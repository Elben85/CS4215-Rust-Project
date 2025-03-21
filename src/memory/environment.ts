import { Heap } from "./heap";
import { addressToValue, Types, valueToAddress } from "./types";

class Environment implements Types {
    public static getTag(): number { return 2; }

    public static allocate(heap: Heap, numFrames: number): number {
        return heap.reserve(numFrames, this.getTag());
    }

    public static getFrame(heap: Heap, address: number, frameIndex: number): number {
        return heap.get(address + frameIndex);
    }

    public static setFrame(heap: Heap, address: number, frameIndex: number, frameAddress: number): void {
        return heap.set(address + frameIndex, frameAddress);
    }

    public static extend(heap: Heap, oldEnv: number, frameAddress: number): number {
        const oldEnvSize = heap.getSize(oldEnv);
        const newEnv = heap.reserve(oldEnvSize, oldEnvSize + 1);

        for (let i = 0; i < oldEnvSize; ++i) {
            this.setFrame(
                heap, newEnv, i, this.getFrame(heap, oldEnv, i)
            );
        }

        this.setFrame(heap, newEnv, oldEnvSize, frameAddress);

        return newEnv;
    }

    public static getValue(heap: Heap, env: number, frameIndex: number, itemIndex: number): number {
        const frameAddress = heap.get(env + frameIndex);
        return Frame.getValue(heap, frameAddress, frameIndex);
    }

    public static setValue(heap: Heap, env: number, frameIndex: number, itemIndex: number, value: any) {
        const frameAddress = heap.get(env + frameIndex);
        Frame.setValue(heap, frameAddress, frameIndex, value);
    }
}

class Frame implements Types {
    public static getTag(): number { return 3; }

    public static allocate(heap: Heap, numVariables: number): number {
        return heap.reserve(numVariables, this.getTag());
    }

    public static setValue(heap: Heap, address: number, index: number, value: any): void {
        this.checkValidAccess(heap, address, index);
        const itemAddress = valueToAddress(heap, value);
        heap.set(address + index, itemAddress);
    }

    public static getValue(heap: Heap, address: number, index: number): any {
        this.checkValidAccess(heap, address, index);
        const itemAddress = heap.get(address + index);
        return addressToValue(heap, itemAddress)
    }

    private static checkValidAccess(heap: Heap, address: number, index: number) {
        if (heap.getTag(address) !== this.getTag()) {
            throw new Error("Trying to set a value of a non-Frame")
        }

        const frameSize = heap.getSize(address);
        if (frameSize <= index) {
            throw new Error(`Invalid index: Trying to access frame of size ${frameSize} at ${index}`);
        }
    }
}
