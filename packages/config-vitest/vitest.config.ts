// This file is for the sake of the vitest comment in a GitHub PR

import { defineConfig } from "vitest/config";
import sharedConfig from "./src";

// https://vitest.dev/config/
export default defineConfig({
  ...sharedConfig,
  test: {
    ...sharedConfig.test,
    coverage: {
      thresholds: {
        lines: 10,
        functions: 10,
        branches: 10,
        statements: 10,
      },
    },
  },
});
