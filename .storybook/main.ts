import { Configuration } from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import custom from '../webpack.config';

module.exports = {
  stories: [
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  webpackFinal: (config: Configuration) => ({
    ...config,
    module: { ...config.module, rules: custom?.module?.rules },
    performance: { ...config.performance, ...custom.performance },
    plugins: [
      ...(config.plugins as []),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
    ],
  }),
  core: {
    builder: 'webpack5',
  },
};
