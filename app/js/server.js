const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config');

/* eslint-disable no-console */

const portToUse = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(portToUse, 'localhost', function message(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + portToUse);
});
