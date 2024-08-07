import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['default', 'json'],
    coverage: { enabled: true, provider: 'istanbul' },
    disableConsoleIntercept: true,
  },
});
