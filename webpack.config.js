const path = require('path')

module.exports = {
    mode: "development",
    entry:  {
        server: "./build/server-client.js",
        userAuth: "./build/userAuth.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        sourceMapFilename: "[name].js.map"
    },
    devtool: "source-map",
    watch: true
}