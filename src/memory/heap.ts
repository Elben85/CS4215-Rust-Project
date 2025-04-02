/**
 * Current Heap structure:
 * 
 * A heap is a linked list
 * 1 word of metadata
 * 1 byte type tag, 2 byte size 6 bytes unused
 * 
 * An address is in word (so adress 1 refers to byte 1 * word_size)
 */

export class Heap {
    private static WORD_SIZE: number = 2 ** 3; // word size (in bytes)
    private static HEAP_SIZE: number = 2 ** 16; // heap size (in bytes)
    public static METADATA_SIZE: number = 1; // size of object metadata in words 

    // metadata offsets (in bytes)
    private size_offset = 1;

    // memory management
    private free: number;
    private buffer: ArrayBuffer;
    private heap: DataView;

    public constructor() {
        this.buffer = new ArrayBuffer(Heap.HEAP_SIZE);
        this.heap = new DataView(this.buffer);
        this.free = 0;
    }

    public reserve(size: number, tag: number): number {
        /**
         * allocate and reserve space in the heap of the specified size (in words, EXCLUDING metadata)
         * Returns the address
         */
        if (Heap.HEAP_SIZE < (this.free + size + Heap.METADATA_SIZE) * Heap.WORD_SIZE) {
            throw new Error("Heap out of memory")
        }

        // TODO: add some metadata
        const address = this.free;
        this.setTag(address, tag);
        this.setSize(address, size);
        this.free += size + Heap.METADATA_SIZE;

        return address;
    }

    private static addressToBytes(address: number) {
        return address * this.WORD_SIZE;
    }

    // METADATA MANAGEMENT
    // tags
    public setMetadata(address: number, tag: number, size: number) {
        this.setTag(address, tag);
        this.setTag(address, size);
    }

    public getTag(address: number): number {
        return this.heap.getUint8(Heap.addressToBytes(address));
    }

    public setTag(address: number, tag: number): void {
        this.heap.setUint8(
            Heap.addressToBytes(address), tag
        );
    }

    // size
    public getSize(address: number): number {
        return this.heap.getUint16(
            Heap.addressToBytes(address) + this.size_offset
        )
    }

    public setSize(address: number, size: number): void {
        this.heap.setUint16(
            Heap.addressToBytes(address) + this.size_offset, size
        )
    }

    // public utility functions
    public get(address: number): number {
        return this.heap.getFloat64(
            Heap.addressToBytes(address)
        );
    }

    public set(address: number, value: number): void {
        this.heap.setFloat64(
            Heap.addressToBytes(address), value
        );
    }

    // TODO: deallocation
    public deallocate(address: number) { }
}