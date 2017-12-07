const commonPaths = require('./common-paths');

module.exports = {
  entry: './src/',
  output: {
    filename: '[chunkhash].bundle.js',
    path: commonPaths.outputPath,
  },
};
