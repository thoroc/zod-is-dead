import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['default', 'json'],
    outputFile: 'converage/coverage-summary.json',
    coverage: { enabled: true, provider: 'istanbul' },
    disableConsoleIntercept: true,
  },
});
