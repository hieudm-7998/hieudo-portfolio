module.exports = {
  root: false,
  env: {
    browser: false,
    node: false,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: { "vue/multi-word-component-names": 0, "no-warning-comments": 0 },
};
