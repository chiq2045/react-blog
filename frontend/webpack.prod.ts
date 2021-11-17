import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { resolve } from 'path';
import common from './webpack.common';

const plugins = [
  new HtmlWebpackPlugin({
    favicon: './assets/logo_white_background-logo_only.png',
    template: resolve(__dirname, 'src', 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: '[id].[contenthash].css'
  }),
  new ForkTsCheckerWebpackPlugin({
    async: false,
    eslint: {
      files: './src/**/*'
    }
  })
];

const config: Configuration = merge(common, {
  mode: 'production',
  plugins
});

export default config;
