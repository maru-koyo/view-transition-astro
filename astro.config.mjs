import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const baseDir = "/maru_school/takaya/transition/";

export default defineConfig({
  base: baseDir,
  outDir: `./dist${baseDir}`,
  integrations: [tailwind()],
});
