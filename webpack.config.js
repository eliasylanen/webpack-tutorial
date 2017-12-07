const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

const addons = addonArgs => {
  const addons = [].concat.apply([], addonArgs).filter(Boolean);

  return addons.map(addonName =>
    require(`./build-utils/addons/webpack.${addonName}`)
  );
};

module.exports = env => {
  console.log(env);

  const envConfig = require(`./build-utils/webpack.${env.env}`);

  return webpackMerge(commonConfig, envConfig);
};
