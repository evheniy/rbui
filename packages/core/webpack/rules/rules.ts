/* istanbul ignore file */

import * as webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {
  postcss,
  css as cssLoader,
  cssVendors,
  scss as scssLoader,
  resolveUrl,
  less as lessLoader,
  cache,
  babel,
  typescript,
  file,
  style,
  svg as svgLoader,
  image,
} from './loaders';

const exclude = /node_modules\/(?!(@legends)\/).*/;

const isProduction = process.env.NODE_ENV === 'production';

export const js: webpack.RuleSetRule = {
  test: /.jsx?$/,
  use: [cache, babel],
  exclude,
};

export const ts: webpack.RuleSetRule = {
  test: /.tsx?$/,
  use: [cache, typescript],
  exclude,
};

export const scss: webpack.RuleSetRule = {
  test: /\.scss$/,
  exclude,
  use: isProduction
    ? [MiniCssExtractPlugin.loader, cssLoader, postcss, resolveUrl, scssLoader]
    : [cache, style, cssLoader, postcss, resolveUrl, scssLoader],
};

export const scssDependencies: webpack.RuleSetRule = {
  test: /\.scss$/,
  include: /node_modules/,
  use: isProduction
    ? [MiniCssExtractPlugin.loader, cssVendors, postcss, resolveUrl, scssLoader]
    : [style, cssVendors, postcss, resolveUrl, scssLoader],
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
    : [style, cssVendors, postcss, lessLoader],
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
    ? [MiniCssExtractPlugin.loader, cssVendors, postcss]
    : [style, cssVendors, postcss],
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
