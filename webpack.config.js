const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const commonConfig = merge(
  {
    entry: { app: path.resolve(__dirname, 'app') },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo',
        inject: false,
        template: require('html-webpack-template'),
        lang: 'en-US',
        mobile: true,
      }),
      new DashboardPlugin(),
    ],
    bail: true,
  },
  parts.loadCSS()
);

const productionConfig = commonConfig;

const devConfig = parts.devServer({
  host: process.env.HOST,
  port: process.env.PORT,
});

module.exports = ({ target }) =>
  target === 'production' ? productionConfig : merge(commonConfig, devConfig);
