import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default [
  // 全局忽略文件
  {
    ignores: ["node_modules/", "dist/", "public/"]
  },
  // JS通用规则
  js.configs.recommended,
  // Vue 文件专用配置
  {
    files: ["**/*.vue"],
    languageOptions: {
      // 直接传入导入的解析器对象，不是字符串
      parser: vueParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      vue: pluginVue
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  },
  // JS/JSX 文件配置
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    }
  }
];