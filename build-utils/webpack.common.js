const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: commonPaths.appEntry,
  output: {
    filename: '[chunkhash].bundle.js',
    path: commonPaths.outputPath,
  },
  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()],
};
