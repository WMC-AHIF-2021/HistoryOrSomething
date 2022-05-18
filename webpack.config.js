const path = require('path');
let BrotliPlugin = require('brotli-webpack-plugin');

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
    plugins: [
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};