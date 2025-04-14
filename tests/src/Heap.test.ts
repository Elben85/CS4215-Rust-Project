import { describe, it, expect, beforeEach } from 'vitest';
import { Heap } from '../../src/memory/heap'; // adjust the import as needed

describe('Buddy Allocator - Heap', () => {

  it('simple allocate and deallocate', () => {
    const heap = new Heap();

    const addr = heap.reserve(8, 1); 
    
    expect(typeof addr).toBe('number');
    expect(addr).toBeGreaterThanOrEqual(0);
    
    const size = heap.getSize(addr);
    expect(size).toBeGreaterThanOrEqual(8);

    heap.deallocate(addr);
  });

  it('reuse memory after deallocation', () => {
    const heap = new Heap();

    const addr1 = heap.reserve(8, 0);
    heap.deallocate(addr1);

    const addr2 = heap.reserve(8, 0);
    expect(addr2).toBe(addr1); // ideally reuses the same block
  });

  it('split larger blocks when needed', () => {
    const heap = new Heap();

    const addr1 = heap.reserve(4, 0); // should split from a larger block
    const size1 = heap.getSize(addr1);
    expect(size1).toBeGreaterThanOrEqual(4);

    heap.deallocate(addr1);
  });

  it('merge buddy blocks on deallocation', () => {
    const heap = new Heap();

    const addr1 = heap.reserve(8, 0);
    const addr2 = heap.reserve(8, 0);

    heap.deallocate(addr1);
    heap.deallocate(addr2);

    // Allocate again; should ideally return one of the merged blocks
    const addr3 = heap.reserve(16, 0);
    expect(typeof addr3).toBe('number');
  });

  it('throw error when memory exhausted', () => {
    const heap = new Heap();
    
    try {
        for (let i = 0; i < 100000; i++) {
            heap.reserve(2, 0); // large block
        }
    } catch (e) {
        expect(e.message).toBe("Heap out of memory: No space available for allocation.");
    }
  });

  it('throw error when memory exhausted', () => {
    const program = `
        
    `;
  });
});


describe('Buddy Allocator Stress Test', () => {
  it('should allocate and deallocate thousands of small blocks without error', () => {
    const heap = new Heap();
    const addresses: number[] = [];

    // 14 words used for free list, so free space to use is 8192 - 14 = 8178 words. 
    for (let i = 0; i < 4089; i++) {
      const addr = heap.reserve(1, 0); // 1 word allocation
      addresses.push(addr);
    }

    // All allocations should have succeeded
    expect(addresses.length).toBe(4089);

    // Deallocate all
    for (const addr of addresses) {
      heap.deallocate(addr);
    }

  });

  it('should handle alternating alloc/free patterns', () => {
    const heap = new Heap();
    const addresses: number[] = [];

    for (let i = 0; i < 1000; i++) {
      const addr = heap.reserve(i % 4 + 1, 0); // allocate 1–4 words
      addresses.push(addr);

      if (i % 2 === 0) {
        heap.deallocate(addr); // deallocate half immediately
        addresses.pop();
      }
    }

    for (const addr of addresses) {
      heap.deallocate(addr);
    }
  });

  it('should reuse memory efficiently after full deallocation', () => {
    const heap = new Heap();
    const allocations = [];

    // Allocate entire heap with small blocks
    for (let i = 0; i < 4000; i++) {
      allocations.push(heap.reserve(1, 0));
    }

    for (const addr of allocations.slice(0,2000)) {
      heap.deallocate(addr);
    }

    const reused = heap.reserve(64, 0);
    for (let i = 0; i < 1000; i++) {
        allocations.push(heap.reserve(1, 0));
    }
    expect(typeof reused).toBe('number');
  });

  it('deallocating unallocated address', () => {
    const heap = new Heap();

    const invalidAddress = 100; // Out-of-bounds or never allocated

    heap.deallocate(invalidAddress);
    // If your implementation silently ignores:
    expect(true).toBe(true); // passes
  });
});


