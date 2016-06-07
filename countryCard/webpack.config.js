var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/app'], 
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
            warnings: false,
            },
        }),
        new htmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
        ]
    }
}
