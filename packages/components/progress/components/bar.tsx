import React, { FC } from 'react';

import cn from 'classnames';

import variant from '@rb/core/variant';

import { BarProps as P } from '../types';

const Bar:FC<P> = props => {
  const {
    min = 0,
    max = 100,
    now = 0,

    label = false,

    success = false,
    info = false,
    warning = false,
    danger = false,

    striped = false,
    animated = false,

    className,
    children,
    ...rest
  } = props;

  const classes = ['progress-bar'];

  const color = variant({
    success,
    danger,
    warning,
    info,
  });

  if (color) {
    classes.push(`bg-${color}`);
  }

  if (striped) {
    classes.push('progress-bar-striped');
  }

  if (animated) {
    classes.push('progress-bar-animated');
  }

  rest['aria-valuemin'] = min || 0;
  rest['aria-valuemax'] = max || 100;

  if (!now) {
    rest['aria-valuenow'] = 0;
  } else {
    rest['aria-valuenow'] = now;
    rest.style = { ...rest.style, width: `${now}%` };
  }

  return (
    <div
      className={cn(...classes, className)}
      role="progressbar"
      {...rest}
    >
      {children || ((label && now) ? `${now}%` : <span className="visually-hidden">{`${now}%`}</span>)}
    </div>
  );
};

Bar.displayName = 'Bar';

export default Bar;
