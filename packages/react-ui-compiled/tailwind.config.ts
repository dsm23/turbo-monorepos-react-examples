import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content" | "corePlugins"> = {
  content: ["./src/**/*.tsx"],
  prefix: "ui-",
  corePlugins: {
    preflight: false,
  },
  presets: [sharedConfig],
};

export default config;
