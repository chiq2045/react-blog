import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { resolve } from 'path';
import common from './webpack.common';

const plugins = [
  new HtmlWebpackPlugin({
    favicon: './assets/logo_white_background-logo_only.png',
    template: resolve(__dirname, 'src', 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: '[id].css'
  }),
  new ForkTsCheckerWebpackPlugin({
    async: false,
    eslint: {
      files: './src/**/*'
    }
  })
];

declare module 'webpack' {
  interface Configuration {
    devServer?: DevServerConfiguration;
  }
}

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    publicPath: '/',
    port: 9000,
    historyApiFallback: true,
    hot: true
  },
  devtool: 'eval-source-map',
  plugins
});

export default config;
