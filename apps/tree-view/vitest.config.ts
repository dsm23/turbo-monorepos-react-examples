/// <reference types="vitest" />
/// <reference types="vite/client" />

import {
  coverageConfigDefaults,
  defaultExclude,
  defineConfig,
  mergeConfig,
} from "vitest/config";
import viteConfig from "./vite.config";

const testMatchPattern = "**/?(*.)+(spec|test).?(c|m)[jt]s?(x)";

// https://vitest.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: false,
      environment: "jsdom",
      setupFiles: "./src/vitestSetup.ts",
      include: [testMatchPattern],
      exclude: [...defaultExclude, "**/playwright-tests/**"],
      coverage: {
        all: true,
        include: ["src/**"],
        exclude: [
          "**/test-utils/**",
          "**/playwright-tests/**",
          testMatchPattern,
          ...coverageConfigDefaults.exclude,
        ],
        thresholds: {
          lines: 10,
          functions: 10,
          branches: 10,
          statements: 10,
        },
      },
    },
  }),
);