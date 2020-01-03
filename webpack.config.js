const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import webpack from 'webpack';

const webpack = require('webpack');

const webpackConfig = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
};

const compilerCbk = (err, stats) => { // Stats Object
    if (err || stats.hasErrors()) {
      // Handle errors here
      console.log(stats)
    }else {
    // Done processing
      console.log("compiler success");
    }
  }

webpack(webpackConfig, compilerCbk);