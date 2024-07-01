import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "presets" | "content" | "corePlugins"> = {
  content: ["./src/**/*.tsx"],
  corePlugins: {
    preflight: false,
  },
  presets: [sharedConfig],
};

export default config;
