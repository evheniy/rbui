/* istanbul ignore file */

import * as webpack from 'webpack';

import {
  js,
  ts,
  scss,
  scssDependencies,
  less,
  lessDependencies,
  css,
  cssDependencies,
  fonts,
  images,
  svg,
} from './rules';

const rules: webpack.RuleSetRule[] = [
  js,
  ts,
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
