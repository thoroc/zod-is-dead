import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      reporter: ['json-summary', 'json', 'lcov'],
      provider: 'istanbul',
      thresholds: {
        lines: 60,
        branches: 60,
        functions: 60,
        statements: 60,
      },
      reportOnFailure: true,
    },
    disableConsoleIntercept: true,
  },
});
