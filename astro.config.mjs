import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
const baseDir = "/maru_school/takaya/transition/";

// https://astro.build/config
export default defineConfig({
  base: baseDir,
  outDir: `./dist${baseDir}`,
  integrations: [tailwind()],
});
