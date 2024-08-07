import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['default', 'json-summary', 'json'],
    outputFile: 'converage/coverage-summary.json',
    coverage: {
      enabled: true,
      provider: 'istanbul',
      thresholds: {
        lines: 60,
        branches: 60,
        functions: 60,
        statements: 60,
      },
    },
    disableConsoleIntercept: true,
  },
});
