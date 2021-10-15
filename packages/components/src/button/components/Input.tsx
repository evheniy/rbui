/* eslint-disable react/button-has-type */

import React, { FC } from 'react';

import cn from 'classnames';

import { InputProps as P } from '../types';

import variant from '../helpers/variant';

import styles from './styles.scss';

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
    setActive,
    className,
    value,
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
    <input
      value={value}
      className={cn(...classes, className)}
      {...rest}
    />
  );
};

Input.displayName = 'Input';

export default Input;
