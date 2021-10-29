/* istanbul ignore file */

import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import TerserPlugin from 'terser-webpack-plugin';

import { getEnv } from '@rbui/core/env';
import resolvePath from '@rbui/core/path';

import rules from './rules';
import plugins from './plugins';
import devServer from './dev_server';
import devtool from './devtool';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isProduction = getEnv() === 'production';

const context = resolvePath();

const publicPath = process.env.PUBLIC_PATH || '/';

const extensions = ['*', '.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.png', '.less'];

const alias = {
  '@babel/runtime': resolvePath('node_modules/@babel/runtime'),
  'react-dom': '@hot-loader/react-dom',
};

const config: Configuration = {
  resolve: { extensions, alias },
  mode: isProduction ? 'production' : 'development',
  target: isProduction ? 'browserslist' : 'web',
  entry: ['react-hot-loader/patch', '@babel/polyfill', 'raf/polyfill', resolvePath('index.tsx')], // TODO change @rb/ui-icon to app
  output: {
    filename: '[name].[contenthash].js',
    path: resolvePath('build'),
    publicPath,
    chunkFilename: '[name].[id].[contenthash].js',
  },
  module: { rules },
  plugins,
  devServer,
  devtool,
  context,
  optimization: {
    emitOnErrors: true,
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
  },
  performance: {
    hints: false,
  },
};

export default config;
