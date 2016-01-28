const webpack = require('webpack');

const Config = require('./webpack.common');

Config.devtool = '#cheap-module-eval-source-map';
Config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  'bootstrap-loader',
  './app/js/index',
];

Config.plugins = Config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: '"development"' },
  }),
]);

module.exports = Config;
