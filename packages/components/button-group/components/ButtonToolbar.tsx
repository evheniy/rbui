import React, { FC } from 'react';

import cn from 'classnames';

import { ButtonToolbarProps as P } from '../types';

const ButtonToolbar:FC<P> = ({ className, ...props }) => (
  <div
    className={cn('btn-toolbar', className)}
    role="toolbar"
    aria-label={props['aria-label'] || 'ButtonGroup'}
    {...props}
  />
);

ButtonToolbar.displayName = 'ButtonToolbar';

export default ButtonToolbar;
