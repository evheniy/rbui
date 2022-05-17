/* istanbul ignore file */

import * as webpack from 'webpack';

import {
  bootstrap,
  css,
  cssDependencies,
  fonts,
  images,
  js,
  less,
  lessDependencies,
  scss,
  scssDependencies,
  svg,
  ts,
} from './rules';

const rules: webpack.RuleSetRule[] = [
  js,
  ts,
  bootstrap,
  scss,
  scssDependencies,
  less,
  lessDependencies,
  css,
  cssDependencies,
  fonts,
  images,
  svg,
];

export default rules;
