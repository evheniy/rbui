/* istanbul ignore file */

import * as webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { getFullPath } from '@rbui/core/path';

import {
  babel,
  cache,
  cssBootstrap,
  css as cssLoader,
  cssVendors,
  file,
  image,
  less as lessLoader,
  postcss,
  resolveUrl,
  scss as scssLoader,
  style,
  svg as svgLoader,
  typescript,
} from './loaders';

const exclude = /node_modules\/(?!(@rb)\/).*/;

const isProduction = process.env.NODE_ENV === 'production';

export const js: webpack.RuleSetRule = {
  test: /.jsx?$/,
  use: isProduction ? babel : [cache, babel],
  exclude,
};

export const ts: webpack.RuleSetRule = {
  test: /.tsx?$/,
  use: isProduction ? [cache, babel, typescript] : [babel, typescript],
  exclude,
};

export const bootstrap: webpack.RuleSetRule = {
  test: /\.scss$/,
  include: getFullPath('packages', 'components'),
  use: isProduction
    ? [MiniCssExtractPlugin.loader, cssBootstrap, postcss, resolveUrl, scssLoader]
    : [cache, style, cssBootstrap, postcss, resolveUrl, scssLoader],
};

export const scss: webpack.RuleSetRule = {
  test: /\.scss$/,
  exclude: [exclude, getFullPath('packages', 'components')],
  use: isProduction
    ? [MiniCssExtractPlugin.loader, cssLoader, postcss, resolveUrl, scssLoader]
    : [cache, style, cssLoader, postcss, resolveUrl, scssLoader],
};

export const scssDependencies: webpack.RuleSetRule = {
  test: /\.scss$/,
  include: /node_modules/,
  use: isProduction
    ? [MiniCssExtractPlugin.loader, cssVendors, postcss, resolveUrl, scssLoader]
    : [cache, style, cssVendors, postcss, resolveUrl, scssLoader],
};

export const less: webpack.RuleSetRule = {
  test: /\.less$/,
  exclude,
  use: isProduction
    ? [MiniCssExtractPlugin.loader, cssLoader, postcss, lessLoader]
    : [cache, style, cssLoader, postcss, lessLoader],
};

export const lessDependencies: webpack.RuleSetRule = {
  test: /\.less$/,
  include: /node_modules/,
  use: isProduction
    ? [MiniCssExtractPlugin.loader, cssVendors, postcss, lessLoader]
    : [cache, style, cssVendors, postcss, lessLoader],
};

export const css: webpack.RuleSetRule = {
  test: /\.css$/,
  exclude,
  use: isProduction
    ? [MiniCssExtractPlugin.loader, cssLoader, postcss]
    : [cache, style, cssLoader, postcss],
};

export const cssDependencies: webpack.RuleSetRule = {
  test: /\.css$/,
  include: /node_modules/,
  use: isProduction
    ? [MiniCssExtractPlugin.loader, cssVendors]
    : [cache, style, cssVendors],
};

export const fonts: webpack.RuleSetRule = {
  test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  use: [file('fonts/')],
};

export const images: webpack.RuleSetRule = {
  test: /\.(gif|png)$/i,
  use: [file('images/'), image],
};

export const svg: webpack.RuleSetRule = {
  test: /\.svg$/,
  use: [svgLoader],
};
