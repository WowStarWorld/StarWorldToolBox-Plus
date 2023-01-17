module.exports = {
    env: {
        browser: true,
        es2022: true,
        jquery: true,
    },
    globals: {
        "process": "writable",
        "JQuery": "readable",
        "JSX": "readable",
    },
    extends: ["alloy", "alloy/typescript"],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: [],
    rules: {
        'no-return-assign': 'off',
        'eqeqeq': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        'max-params': 0,
    },
};
