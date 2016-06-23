var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: ['./src/app'], 
        vendors: ['angular', 'angular-animate', 'angular-ui-router'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        sourceMapFilename: "[name].js.map",
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
            warnings: false,
            },
        }),
        new htmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        //new webpack.IgnorePlugin(/angular/)
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js')
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
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true,
                    plugins: ['transform-runtime'],
                }
            },
        ]
    }
}
