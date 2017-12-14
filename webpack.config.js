const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

const addons = addonArgs => {
  const addons = [].concat(...[addonArgs]).filter(Boolean);
  return addons.map(addonName =>
    require(`./build-utils/addons/webpack.${addonName}`)
  );
};

module.exports = env => {
  if (!env) throw new Error('No --env flag');

  const envConfig = require(`./build-utils/webpack.${env.env}`);
  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addons)
  );

  console.log(mergedConfig);
  return mergedConfig;
};
