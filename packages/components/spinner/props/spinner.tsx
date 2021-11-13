import React from 'react';

import cn from 'classnames';

import variant from '@rbui/core/variant';

import { MapSpinnerProps as P } from '../types';

const mapSpinnerProps: P = props => {
  const {
    grow = false,
    primary = false,
    secondary = false,
    success = false,
    danger = false,
    warning = false,
    info = false,
    light = false,
    dark = false,
    sm = false,
    ...rest
  } = props;

  const newProps = { ...rest };

  const classes = grow ? ['spinner-grow'] : ['spinner-border'];

  const size = variant({ sm });

  if (size) {
    classes.push(`spinner-${grow ? 'grow' : 'border'}-${size}`);
  }

  const style = variant({
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
  });

  if (style) {
    classes.push(`text-${style}`);
  }

  newProps.className = cn(...classes, newProps.className);
  newProps.role = 'status';
  newProps['aria-hidden'] = 'true';
  newProps.children = newProps.children || <span className="visually-hidden">Loading...</span>;

  return newProps;
};

export default mapSpinnerProps;
