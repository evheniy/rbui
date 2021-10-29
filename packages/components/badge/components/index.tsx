import React, { FC } from 'react';

import cn from 'classnames';

import variant from '@rbui/core/variant';

import { BadgeProps as P } from '../types';

const Badge:FC<P> = props => {
  const {
    primary = false,
    secondary = false,
    success = false,
    danger = false,
    warning = false,
    info = false,
    light = false,
    dark = false,
    pill = false,
    circle = false,
    className,
    ...rest
  } = props;

  const classes = ['badge'];

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
    classes.push(`bg-${style}`);

    if (['warning', 'info', 'light'].includes(style)) {
      classes.push('text-dark');
    }
  }

  if (pill) {
    classes.push('rounded-pill');
  }

  if (circle) {
    classes.push('rounded-circle');
  }

  return <span className={cn(...classes, className)} {...rest} />;
};

Badge.displayName = 'Badge';

export default Badge;
