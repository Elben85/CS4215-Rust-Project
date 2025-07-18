import { Heap } from "./heap";
import { Types, Pointer } from "./types";

/**
 * Heap metadata followed by n bytes of frame addresses
 */
export class Environment implements Types {
    public static getTag(): number { return 0; }

    public static allocate(heap: Heap, numFrames: number): number {
        return heap.reserve(numFrames, this.getTag());
    }

    public static getPointerAddress(heap: Heap, env: number, frameIndex: number, itemIndex: number) {
        return Frame.getAddress(this.getFrame(heap, env, frameIndex), itemIndex);
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
        const frameAddress = this.getFrame(heap, env, frameIndex);
        return Frame.getValue(heap, frameAddress, itemIndex);
    }

    public static setValue(heap: Heap, env: number, frameIndex: number, itemIndex: number, itemAddress: number) {
        const frameAddress = this.getFrame(heap, env, frameIndex);
        Frame.setValue(heap, frameAddress, itemIndex, itemAddress);
    }

    public static dropEnvAndLastFrame(heap: Heap, env: number) {
        const envSize = heap.getSize(env);
        const frameAddr = this.getFrame(heap, env, envSize - 1);
        Frame.dropFrame(heap, frameAddr);
        heap.deallocate(env);
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

    public static getAddress(frameAddress: number, index: number) {
        return frameAddress + Heap.METADATA_SIZE + this.indexToOffset(index);
    }

    public static allocate(heap: Heap, numVariables: number): number {
        const frameAddress = heap.reserve(this.indexToOffset(numVariables), this.getTag());
        for (let i = 0; i < numVariables; ++i) {
            const pAddress = this.getAddress(frameAddress, i);
            heap.setMetadata(pAddress, Pointer.getTag(), 1);
            heap.setOwner(pAddress, frameAddress);
            Pointer.invalidatePointer(heap, pAddress);
        }
        return frameAddress
    }

    public static setValue(heap: Heap, address: number, index: number, itemAddress: number): void {
        this.checkValidAccess(heap, address, index);
        const pointerAddress = this.getAddress(address, index);
        Pointer.setPointer(heap, pointerAddress, itemAddress)
    }

    public static getValue(heap: Heap, address: number, index: number): any {
        this.checkValidAccess(heap, address, index);
        const pointerAddress = this.getAddress(address, index);
        const itemAddress = Pointer.addressToValue(heap, pointerAddress);
        return itemAddress;
    }

    private static checkValidAccess(heap: Heap, address: number, index: number) {
        if (heap.getTag(address) !== this.getTag()) {
            throw new Error(`Trying to set a value of a non-Frame, got tag: ${heap.getTag(address)}`)
        }

        const frameSize = heap.getSize(address);

        if (frameSize <= this.indexToOffset(index)) {
            throw new Error(`Invalid index: Trying to access frame of size ${frameSize} at ${index}`);
        }
    }

    public static dropFrame(heap: Heap, address: number) {
        const numVar = heap.getSize(address) / (Heap.METADATA_SIZE + 1);

        for (let i = 0; i < numVar; ++i) {
            const vAddress = this.getValue(heap, address, i);
            if (vAddress !== Pointer.INVALID_POINTER) {
                heap.deallocate(vAddress);
            }
        }
        heap.deallocate(address);
    }
}

export class Callframe implements Types {
    public static getTag(): number { return 7; }

    public static allocate(heap: Heap, args: [number, number]): number {
        const [env, pc] = args;
        const address = heap.reserve(2, this.getTag());
        heap.set(address + Heap.METADATA_SIZE, env);
        heap.set(address + Heap.METADATA_SIZE + 1, pc);
        return address;
    }

    public static addressToValue(heap: Heap, address: number): [number, number] {
        const env = this.getEnvironment(heap, address);
        const pc = this.getPC(heap, address);
        return [env, pc];
    }

    public static getPC(heap: Heap, address: number): number {
        return heap.get(address + Heap.METADATA_SIZE + 1);
    }

    public static getEnvironment(heap: Heap, address: number): number {
        return heap.get(address + Heap.METADATA_SIZE);
    }

}


