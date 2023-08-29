module.exports = {
    tabWidth: 4,
    singleQuote: true,
    printWidth: 100,
    overrides: [
        {
            files: '*.json',
            options: {
                parser: 'json-stringify',
                tabWidth: 2,
            },
        },
    ],
};
