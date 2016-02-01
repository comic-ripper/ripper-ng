const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ripper',
      template: path.join(__dirname, 'app', 'js', 'templates', 'index.html'),
      hash: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    { // Use Absolute asset paths for JS, should probably make this real and do all assets
      apply(compiler) {
        /* eslint-disable */
        compiler.plugin('compilation', function(compilation) {
          compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            htmlPluginData.assets.js = htmlPluginData.assets.js.map((js) => "/" + js);
            callback();
          });
        });
        /* eslint-enable */
      },
    },
  ],
  resolve: {
    root: path.join(__dirname, 'app', 'js'),
    alias: {
      components: 'components',
      containers: 'containers',
      actions: 'actions',
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file',
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery',
      },
    ],
  },
  postcss: [
    autoprefixer,
  ],
};
