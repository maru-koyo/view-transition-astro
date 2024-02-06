import { defineConfig } from "astro/config";
import glslify from "rollup-plugin-glslify";
import tailwind from "@astrojs/tailwind";
const baseDir = "/maru_school/takaya/transition/";

// https://astro.build/config
export default defineConfig({
  base: baseDir,
  outDir: `./dist${baseDir}`,
  integrations: [tailwind()],
  plugins: [
    glslify({
      compress(code) {
        let needNewline = false;
        return code
          .replace(
            /\\(?:\r\n|\n\r|\n|\r)|\/\*.*?\*\/|\/\/(?:\\(?:\r\n|\n\r|\n|\r)|[^\n\r])*/gs,
            ""
          )
          .split(/\n+/)
          .reduce((result, line) => {
            line = line.trim().replace(/\s{2,}|\t/, " ");
            if (line.charAt(0) === "#" || /else/.test(line)) {
              if (needNewline) {
                result.push("\n");
              }
              result.push(line, "\n");
              needNewline = false;
            } else {
              result.push(
                line.replace(
                  /\s*({|}|=|\*|,|\+|\/|>|<|&|\||\[|\]|\(|\)|-|!|;)\s*/g,
                  "$1"
                )
              );
              needNewline = true;
            }
            return result;
          }, [])
          .join(process.env.NODE_ENV === "development" ? "\n" : "")
          .replace(/\n+/g, "\n");
      },
    }),
  ],
});
