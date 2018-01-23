var webpack = require('webpack');
var path = require('path');
var DIST = path.resolve(__dirname, 'demo/');
var SRC = path.resolve(__dirname, 'src/');

const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    devtool: 'source-maps',
    entry: SRC + '/app/index.js',
    output: {
        path: DIST,
        publicPath: '/demo',
        filename: 'index.js',
        // library: ["XUI"],
        // libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[ext]',
        }]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/bilo-ui.scss', to: './'},
            {from: './src/scss', to: './scss'}
        ])
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        port: 8888
    },
    // node: {
    //     fs: 'empty'
    // }
};

module.exports = config;