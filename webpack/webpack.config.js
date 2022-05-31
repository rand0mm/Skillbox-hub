const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env) => ({
  entry: {
    // test1: ['./src/js/test1.js', './src/js/test2.js', './src/index.js'],
    test1: './src/js/test1.js',
    test2: './src/js/test2.js',
    index: './src/index.js',
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: 'js/[name].js',
    // filename: 'js/bundle.js',
    publicPath: env.prod ? './' : '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.scss|css$/i,
        use: [
          env.prod ? {
            loader: MiniCssExtractPlugin.loader,
          } : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    // подключение через html
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // минификация css
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
    }),
    // копирование без изменений
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/src/assets/static`, // откуда
          to: `${__dirname}/dist`, // куда
        },
      ],
    }),
    // очистка
    new CleanWebpackPlugin(),
  ],
  // параметры дев сервера
  devServer: {
    open: true,
    historyApiFallback: true,
    hot: true,
  },
});
