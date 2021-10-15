/* eslint-disable react/button-has-type */

import React, { FC } from 'react';

import cn from 'classnames';

import { ButtonProps as P, ButtonTypes } from '../types';

import variant from '../helpers/variant';

import styles from './styles.scss';

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
    setActive,
    className,
    children,
    ...rest
  } = props;

  const classes = [styles.btn];

  if (nowrap) {
    classes.push(styles['text-nowrap']);
  }

  const size = variant({ lg, sm });

  if (size) {
    classes.push(styles[`btn-${size}`]);
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
    classes.push(styles[`${outline ? 'btn-outline-' : 'btn-'}${style}`]);
  }

  if (toggle) {
    if (active) {
      rest['aria-pressed'] = 'true';
      classes.push(styles.active);
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
