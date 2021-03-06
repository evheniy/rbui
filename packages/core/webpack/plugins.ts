/* istanbul ignore file */

import * as webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { getEnv } from '@rbui/core/env';

import { html } from '@rbui/core/html';

process.env.PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

const client: webpack.WebpackPluginInstance[] = [
  new HtmlWebpackPlugin({
    templateContent: html(),
    hash: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: false,
      minifyJS: true,
      minifyCSS: true,
    },
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
  }) as unknown as webpack.WebpackPluginInstance,
];

if (getEnv() === 'production') {
  client.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  );
} else {
  client.push(
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  );
}

export default client;
