module.exports = {
    root: true,
    env: {
        node: true,
        jest: true
    },
    globals: {
        expect: 'writeable',
        assert: 'writeable',
    },
    plugins: [
        'vue',
        'prettier',
        'jest',
        'vue-a11y'
    ],
    'extends': [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        'plugin:vue-a11y/recommended',
        'eslint:recommended',
        'prettier/vue',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/attribute-hyphenation': 'off',
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        ],
        'prettier/prettier': [
            'error',
            {
                semi: false,
                singleQuote: true,
                trailingComma: 'none'
            },
        ],
        'no-var': 2,
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ]
        }
    ]
}
