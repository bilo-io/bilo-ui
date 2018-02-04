const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const path = require('path');
const DIST = path.resolve(__dirname, 'demo/');
const SRC = path.resolve(__dirname, 'src/');

const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    devtool: 'source-maps',
    entry: {
        main: SRC + '/_demo/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'static.js',
        libraryTarget: 'umd'
    },
    // resolve: {
    //     modules: [
    //         path.resolve('./'),
    //         path.resolve('./src/'),
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
        new HtmlWebpackPlugin({ template: './src/_demo/index.html', filename: 'index.html', inject: 'body' }),
        new StaticSiteGeneratorPlugin({
            paths: [
              '/hello/',
              '/world/'
            ],
            locals: {
              // Properties here are merged into `locals`
              // passed to the exported render function
              greet: 'Hello'
            }
          })
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