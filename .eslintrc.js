module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
    },
    env: {
        es6: true,
        browser: true,
        commonjs: true,
        node: true,
        jquery: true,
    },
    globals: {
        $: true,
    },
    settings: {
        react: {
            version: '17',
        },
    },
    plugins: ['prettier'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'no-alert': 0,
        'no-console': 0,
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
};
