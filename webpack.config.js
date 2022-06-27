const path = require('path');
let BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
    mode: "production",
    devtool: "source-map",
    watch: true,
    entry:  {
        server: "./build/server-client.js",
        userAuthBundle: "./build/userAuth.js",
        general: "./build/tempJs.js",
        scriptBundle: "./build/script.js",
        endOfQuizBundle: "./build/endOfQuiz.js",
        quizBundle: "./build/quiz.js",
        dashboardBundle: "./build/dashboard.js",
        shopBundle: "./build/shop.js",
        countrySwitchBundle: "./build/countrySwitch.js",
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