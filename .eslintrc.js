module.exports = {
    env: {
        jest: true,
    },
    parser: 'babel-eslint',
    extends: ['react-app', 'plugin:jsx-a11y/recommended'],
    plugins: ['jsx-a11y', 'flowtype'],
    rules: {
        indent: ['error', 4],
    },
};