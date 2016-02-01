const webpack = require('webpack');

const Config = require('./webpack.common');

Config.devtool = 'source-map';
Config.entry = [
  'bootstrap-loader',
  './app/js/index',
];

Config.plugins = Config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: '"production"' },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
]);

module.exports = Config;
