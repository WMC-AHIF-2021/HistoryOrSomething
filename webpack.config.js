const path = require('path')

module.exports = {
    mode: "development",
    entry:  {
        server: "./build/server-client.js",
        userAuthBundle: "./build/userAuth.js"
    },
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: '[name].js',
        sourceMapFilename: "[name].js.map"
    },
    devtool: "source-map",
    watch: true
}