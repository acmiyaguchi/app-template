module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb-base"],
  plugins: ["jest", "svelte3"],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["draft"] },
    ],
  },
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        "import/first": "off",
        "import/no-mutable-exports": "off",
        "prefer-const": "off",

        // Temporarily work around a bug in eslint-plugin-svelte3.
        //
        // https://github.com/sveltejs/eslint-plugin-svelte3/issues/41#issuecomment-572503966
        "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 2, maxEOF: 0 }],
      },
    },
    {
      files: ["**/*.js"],
      extends: ["prettier"],
      plugins: ["prettier"],
      rules: {
        "prettier/prettier": "error",
      },
    },
  ],
};
