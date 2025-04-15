/**
 * Current Heap structure:
 * 
 * A heap is a linked list
 * 1 word of metadata
 * 1 byte type tag, 2 byte size, 2 byte freelist metadata, 2 byte owner address
 * 
 * An address is in word (so adress 1 refers to byte 1 * word_size)
 */

export class Heap {
    private static WORD_SIZE: number = 2 ** 3; // word size (in bytes)
    private static HEAP_SIZE: number = 2 ** 16; // heap size (in bytes)
    public static METADATA_SIZE: number = 1; // size of object metadata in words 

    private static MAX_LEVEL = Math.log2(Heap.HEAP_SIZE / Heap.WORD_SIZE); // 13
    private static FREE_LIST_TABLE_WORDS = Heap.MAX_LEVEL + 1; // 14 entries
    private static HEAP_BASE = Heap.FREE_LIST_TABLE_WORDS; // usable heap starts after freelist heads
    public static INVALID_OWNER_ADDRESS = 0;

    // metadata offsets (in bytes)
    private size_offset = 1;
    private next_offset = 3;
    private owner_offset = 5;

    // memory management
    private buffer: ArrayBuffer;
    private heap: DataView;

    public constructor() {
        this.buffer = new ArrayBuffer(Heap.HEAP_SIZE);
        this.heap = new DataView(this.buffer);
        this.constructFreelist()
    }

    private constructFreelist() {
        for (let i = 0; i <= Heap.MAX_LEVEL; i++) {
            this.setFreeListHead(i, 0);
        }
    
        let address = Heap.HEAP_BASE;
        const totalWords = Heap.HEAP_SIZE / Heap.WORD_SIZE;
    
        // Fill remaining heap using largest possible buddy blocks
        while (address < totalWords) {
            const remaining = totalWords - address;
    
            let level = Math.floor(Math.log2(remaining));
            const blockSize = 2**level;
    
            // Write metadata at block start
            this.setNext(address, this.getFreeListHead(level));
            this.setFreeListHead(level, address);
    
            address += blockSize;
        }
    }
    
    

    public reserve(size: number, tag: number): number {
        /**
         * allocate and reserve space in the heap of the specified size (in words, EXCLUDING metadata)
         * Returns the address
         */

        // TODO: add some metadata
        const address = this.buddyAllocate(size);
        this.setTag(address, tag);
        this.setSize(address, size);
        this.setOwner(address, 0);

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
        return this.getByteAtOffset(address, 0);
    }

    public setTag(address: number, tag: number): void {
        return this.setByteAtOffset(address, 0, tag);
    }

    // size
    public getSize(address: number): number {
        return this.getTwoByteAtOffset(address, this.size_offset);
    }

    public setSize(address: number, size: number): void {
        return this.setTwoByteAtOffset(address, this.size_offset, size);
    }

    // owner
    public getOwner(address: number): number {
        return this.getTwoByteAtOffset(address, this.owner_offset);
    }

    public setOwner(address: number, owner: number) {
        this.setTwoByteAtOffset(address, this.owner_offset, owner);
    }

    // set byte at offset
    public setByteAtOffset(address: number, offset: number, value: number) {
        this.heap.setUint8(
            Heap.addressToBytes(address) + offset, value
        )
    }

    public getByteAtOffset(address: number, offset: number) {
        return this.heap.getUint8(Heap.addressToBytes(address) + offset);
    }

    // set 2 bytes at offset
    public setTwoByteAtOffset(address: number, offset: number, value: number) {
        this.heap.setUint16(
            Heap.addressToBytes(address) + offset, value
        )
    }

    public getTwoByteAtOffset(address: number, offset: number) {
        return this.heap.getUint16(Heap.addressToBytes(address) + offset);
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

    public deallocate(address: number) {
        this.buddyDeallocate(address);
     }


     // Buddy Memory Management
     private buddyAllocate(requestSizeWords: number): number {
        const totalSize = requestSizeWords + Heap.METADATA_SIZE;
        let level = Math.ceil(Math.log2(totalSize));
    
        for (let i = level; i <= Heap.MAX_LEVEL; i++) {
            let head = this.getFreeListHead(i);
            if (head !== 0) {
                // Remove from freelist
                this.setFreeListHead(i, this.getNext(head));
    
                let addr = head;
                for (let j = i; j > level; j--) {
                    const buddy = addr + (2**(j - 1));
                    this.setSize(buddy, (2**(j - 1)) - Heap.METADATA_SIZE);
                    this.setNext(buddy, this.getFreeListHead(j - 1));
                    this.setFreeListHead(j - 1, buddy);
                }
    
                this.setSize(addr, (2**level) - Heap.METADATA_SIZE);
                return addr;
            }
        }
    
        throw new Error("Heap out of memory: No space available for allocation.");
    }
    

    private buddyDeallocate(address: number): void {
        const totalSize = this.getSize(address) + Heap.METADATA_SIZE;
        let level = Math.ceil(Math.log2(totalSize));
        let addr = address;
    
        while (true) {
            const buddy = addr ^ (2**level);
            const head = this.getFreeListHead(level);
    
            // Check if buddy is in the free list
            let found = false;
            let prev = -1;
            let current = head;
            while (current !== 0) {
                if (current === buddy) {
                    found = true;
                    break;
                }
                prev = current;
                current = this.getNext(current);
            }
    
            if (found) {
                if (prev === -1) {
                    this.setFreeListHead(level, this.getNext(current));
                } else {
                    this.setNext(prev, this.getNext(current));
                }
    
                addr = Math.min(addr, buddy);
                level++;
            } else {
                break;
            }
        }
    
        this.setSize(addr, (2**level) - Heap.METADATA_SIZE);
        this.setNext(addr, this.getFreeListHead(level));
        this.setFreeListHead(level, addr);
    }
    

    private setNext(address: number, next: number): void {
        this.setTwoByteAtOffset(address, this.next_offset, next);
    }
    
    private getNext(address: number): number {
        return this.getTwoByteAtOffset(address, this.next_offset);
    }

    private getFreeListHead(level: number): number {
        return this.getTwoByteAtOffset(level, 0);
    }
    
    private setFreeListHead(level: number, address: number): void {
        this.setTwoByteAtOffset(level, 0, address);
    }
    
    
    
    
}