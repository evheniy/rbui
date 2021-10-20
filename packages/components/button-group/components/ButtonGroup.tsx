import React, { FC } from 'react';

import cn from 'classnames';

import variant from '@rb/core/variant';

import { ButtonGroupProps as P } from '../types';

const ButtonGroup:FC<P> = props => {
  const {
    lg,
    sm,
    vertical,
    className,
    ...rest
  } = props;

  const classes = vertical ? ['btn-group-vertical'] : ['btn-group'];

  const size = variant({ lg, sm });

  if (size) {
    classes.push(`btn-group-${size}`);
  }

  return (
    <div
      className={cn(...classes, className)}
      role="group"
      aria-label={rest['aria-label'] || 'ButtonGroup'}
      {...rest}
    />
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
