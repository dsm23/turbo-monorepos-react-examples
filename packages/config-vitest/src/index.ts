/// <reference types="vitest" />

import tsconfigPaths from "vite-tsconfig-paths";
import type { ViteUserConfig } from "vitest/config";

const config = {
  plugins: [tsconfigPaths()],
  test: {
    globals: false,
    coverage: {},
    // coverage: {
    //   provider: "istanbul",
    //   reporter: [
    //     [
    //       "json",
    //       {
    //         file: `../coverage.json`,
    //       },
    //     ] as const,
    //   ],
    //   enabled: true,
    // },
  },
} satisfies ViteUserConfig;

export default config;
