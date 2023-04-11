const path = require("path");

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'provider': path.resolve(__dirname, './src/provider'),
            "core": path.resolve(__dirname, "./src/core"),
            'components': path.resolve(__dirname, './src/components'),
            "coefficientHistories": path.resolve(__dirname, "./src/coefficientHistories"),
        },
    },
};