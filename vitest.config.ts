import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8', // Enables test coverage
      reporter: ['text', 'html'], // Generates coverage reports
    },
    setupFiles: ['./tests/src/setup.ts']
  },
});

