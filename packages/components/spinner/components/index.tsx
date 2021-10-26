import React, { FC } from 'react';

import cn from 'classnames';

import variant from '@rb/core/variant';

import { SpinnerProps as P } from '../types';

const Spinner:FC<P> = props => {
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
    className,
    children,
    ...rest
  } = props;

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

  return (
    <span
      className={cn(...classes, className)}
      role="status"
      aria-hidden="true"
      {...rest}
    >
      {children || <span className="visually-hidden">Loading...</span>}
    </span>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
