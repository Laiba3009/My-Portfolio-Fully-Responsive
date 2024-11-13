import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'lib'], // List your directories to lint here
  },
  
    "compilerOptions": {
      "module": "ESNext",
      "moduleResolution": "Node"
    }
  }
  


 

