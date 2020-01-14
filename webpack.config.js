const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const argv = require('yargs').argv;
const chalk = require('chalk');

const isDev = argv.dev;

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
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "POM"
        }),
    ],
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      
    },
};

const compilerCbk = (err, stats) => { // Stats Object
    if (err || stats.hasErrors()) {
      // Handle errors here
      console.log(stats.errors)
    }else {
    // Done processing
      console.log(chalk.green("compiler success"));
    }
  }

const watchConfig = {
    aggregateTimeout: 300,
    poll: undefined
}
const compilerOpt = isDev ? [watchConfig, compilerCbk]: [compilerCbk];
webpack(webpackConfig)[isDev ? "watch" : "run"](...compilerOpt);