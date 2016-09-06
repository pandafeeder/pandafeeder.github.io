var path = require("path")
var webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry   : {app: ['./src/js/entry.js']},
    output  : {path: path.join(__dirname, 'dist'), filename: 'bundle.js'},
    plugins : [new htmlWebpackPlugin({template: './src/index.html', inject: 'body'})],
    devtool : undefined,
    module  : {
        loaders: [
            {
                test: /js/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {presets: ['react', 'es2015', {plugins: ['transform-object-rest-spread']}]}
            }
        ]
    }
}
