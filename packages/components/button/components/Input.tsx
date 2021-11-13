/* eslint-disable react/button-has-type */

import React, { FC } from 'react';

import cn from 'classnames';

import variant from '@rbui/core/variant';

import { InputProps as P } from '../types';

const Input:FC<P> = props => {
  const {
    primary = false,
    secondary = false,
    success = false,
    danger = false,
    warning = false,
    info = false,
    light = false,
    dark = false,
    link = false,
    outline = false,
    lg = false,
    sm = false,
    nowrap = false,
    toggle = false,
    active = false,
    className,
    value,
    ...rest
  } = props;

  const classes = ['btn'];

  if (nowrap) {
    classes.push('text-nowrap');
  }

  const size = variant({ lg, sm });

  if (size) {
    classes.push(`btn-${size}`);
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
    link,
  });

  if (style) {
    classes.push(`${outline ? 'btn-outline-' : 'btn-'}${style}`);
  }

  if (toggle) {
    if (active) {
      rest['aria-pressed'] = 'true';
      classes.push('active');
    }
  }

  return (
    <input
      value={value}
      className={cn(...classes, className)}
      {...rest}
    />
  );
};

Input.displayName = 'Input';

export default Input;
