import * as fs from "fs";
import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
import lessToJS from "less-vars-to-js";

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./src/styles/antd.less"), "utf8")
);

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: "antd",
          libDirectory: "es",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
});
