const webpack = require('webpack')
const path = require('path')
const DIST = path.resolve(__dirname, 'dist/')
const SRC = path.resolve(__dirname, 'src/')
const marked = require('marked')
const renderer = new marked.Renderer()
const CopyWebpackPlugin = require('copy-webpack-plugin')

var config = {
    devtool: 'source-maps',
    entry: {
        main: SRC + '/index.js'
    },
    output: {
        path: DIST,
        publicPath: '/dist',
        filename: 'index.js',
        library: ["XUI"],
        libraryTarget: 'umd'
    },
    resolve: {
        modules: [
            path.resolve('./'),
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(css|scss)$/,
                loaders: [
                    'style-loader', 'css-loader', 'sass-loader'
                ],
                exclude: /node_modules/
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            }, {
                test: /\.md$/,
                use: [
                    {
                        // loader: 'html-loader' }, {
                        loader: 'markdown-loader',
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ]
            }, {
                test: /\.stories\.jsx?$/,
                loaders: [
                    {
                      loader: require.resolve('@storybook/addon-storysource/loader'),
                      options: {
                        prettierConfig: {
                          printWidth: 80,
                          singleQuote: false,
                        }
                      }
                    }
                  ],
                  enforce: 'pre',
            }
        ]
    },
    plugins: [new CopyWebpackPlugin([
            {
                from: './src/bilo-ui.scss',
                to: './'
            }, {
                from: './src/scss',
                to: './scss'
            }
        ])],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    // node: {     fs: 'empty' }
};

module.exports = config;