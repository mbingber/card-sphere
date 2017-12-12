const path = require('path');
const webpack = require('webpack');

module.exports = (config, env) => {
  if (!config.resolve) config.resolve = {};
  if (!config.resolve.alias) config.resolve.alias = {};
  config.resolve.alias['three/OrbitControls'] = path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js');
  config.resolve.alias['three/OBJLoader'] = path.join(__dirname, 'node_modules/three/examples/js/loaders/OBJLoader.js');
  if (!config.plugins) config.plugins = [];
  config.plugins.push(new webpack.ProvidePlugin({
    'THREE': 'three'
  }));
  return config;
};
