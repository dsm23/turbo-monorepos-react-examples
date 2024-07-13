import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "darkMode" | "presets"> = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  presets: [sharedConfig],
};

export default config;
