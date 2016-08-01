var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: ['./src/js/main.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    cacheDirectory: true,
                }
            },
            {   
                test: /\.css/,
                loader: 'style!css'
            }
        ]
    }
}
