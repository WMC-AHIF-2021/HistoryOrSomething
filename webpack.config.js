const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: "source-map",
    watch: true,
    entry:  {
        server: "./build/server-client.js",
        userAuthBundle: "./build/userAuth.js"
    },
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: '[name].js',
        sourceMapFilename: "[name].js.map"
    },
    plugins: [new CompressionPlugin()],
};