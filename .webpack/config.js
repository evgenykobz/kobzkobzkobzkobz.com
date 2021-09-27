const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  entry: {
    main: {
      import: path.resolve('src', 'App.jsx'),
    },
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      components: path.resolve('src', 'components'),
      pages: path.resolve('src', 'pages'),
      assets: path.resolve('src', 'assets'),
      constants: path.resolve('src', 'constants'),
    },
    extensions: ['.jsx', '.js', '.json']
  },
  devtool: 'source-map',
  target: 'web',
  devServer: {
    port: 3000,
    static: path.resolve('dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kobz',
      filename: 'index.html',
      template: path.resolve('public', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      context: path.resolve('src'),
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new CopyWebpackPlugin({
      patterns: [
        path.resolve('public', 'favicons'),
        path.resolve('public', 'site.webmanifest'),
      ],
    })
  ],
};
