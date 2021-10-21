import React, { FC } from 'react';

import cn from 'classnames';

import Bar from './bar';

import { ProgressProps as P } from '../types';

const Progress:FC<P> = props => {
  const {
    min,
    max,
    now,
    label,
    success,
    info,
    warning,
    danger,
    striped,
    animated,

    className,
    children,
    ...rest
  } = props;

  const barProps = {
    min,
    max,
    now,
    label,
    success,
    info,
    warning,
    danger,
    striped,
    animated,
  };

  return (
    <div
      className={cn('progress', className)}
      {...rest}
    >
      {children || <Bar {...barProps} />}
    </div>
  );
};

Progress.displayName = 'Progress';

export default Progress;
