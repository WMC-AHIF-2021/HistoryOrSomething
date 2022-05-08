const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        bundle: '../build/index.js',
        test: '../build/test.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        sourceMapFilename: "[name].js.map"
    },
    devtool: "source-map",
    watch: true
}