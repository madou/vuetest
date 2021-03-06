const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './index',
  },
  output: {
    path: `${__dirname}/docs`,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? '/vuetest' : '/',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    publicPath: '/',
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
