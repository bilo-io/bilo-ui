var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var DIST = path.resolve(__dirname, 'demo/');
var SRC = path.resolve(__dirname, 'src/');

const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    devtool: 'source-maps',
    entry: SRC + '/app/index.js',
    output: {
        path: DIST,
        publicPath: '/',
        filename: 'app.js'
    },
    // resolve: {
    //     modules: [
    //         path.resolve('./'),
    //         path.resolve('./src/app'),
    //         path.resolve('./node_modules')
    //     ]
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(css|scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            }
        ]
    },
    plugins: [
        // new Visualizer({filename: './stats.html'}),
        new HtmlWebpackPlugin({template: './src/app/index.html', filename: 'index.html', inject: 'body'}),
        // new CopyWebpackPlugin([
        //     {
        //         from: 'node_modules/highlight.js/styles/monokai.css',
        //         to: './scss/'
        //     }
        // ])
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    // node: {     fs: 'empty' }
};

module.exports = config;