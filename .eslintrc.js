module.exports = {
    root: true,
    extends: [
        'react-app',
        'react-app/jest',
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'prettier/prettier': ['error'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/no-default-export': 'error',
    },
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['src/**/*.test.ts', 'src/frontend/generated/*'],
}
