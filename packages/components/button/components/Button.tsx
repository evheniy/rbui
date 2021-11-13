/* eslint-disable react/button-has-type */

import React, { FC } from 'react';

import cn from 'classnames';

import variant from '@rbui/core/variant';

import { ButtonProps as P, ButtonTypes } from '../types';

const Button:FC<P> = props => {
  const {
    type = ButtonTypes.button,
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
    children,
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
    <button
      type={type}
      className={cn(...classes, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
