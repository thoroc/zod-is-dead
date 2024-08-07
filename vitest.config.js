import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['default', 'json'],
    outputFile: 'test-results.json',
    coverage: { enabled: true, providers: ['istanbul'] },
    disableConsoleIntercept: true,
  },
});
