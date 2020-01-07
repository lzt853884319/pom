const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import webpack from 'webpack';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const argv = require('yargs').argv;

const webpack = require('webpack');

const webpackConfig = {
    mode: 'development',
    // mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash:4].js',
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "POM"
        }),
    ]
};

// if() {
//     webpackConfig.devServer = {
//         contentBase: path.join(__dirname, 'dist'),
//         compress: true,
//         port: 9000,
//     },
// }
argv.map(item => {
    console.log(Object.keys(item).join("|"));
})

const compilerCbk = (err, stats) => { // Stats Object
    if (err || stats.hasErrors()) {
      // Handle errors here
      console.log(stats)
    }else {
    // Done processing
      console.log("compiler success");
    }
  }
module.exports = webpackConfig;
// webpack(webpackConfig,compilerCbk)
// .watch({
//     // Example watchOptions
//     aggregateTimeout: 300,
//     poll: undefined
//   }, (err, stats) => { // Stats Object
//     // Print watch/build result here...
//   });