import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

const baseDir = "/maru_school/takaya/transition/";

export default defineConfig({
  base: baseDir,
  outDir: `./dist${baseDir}`,
  integrations: [react(), tailwind()],
  plugins: [glsl()],
});
