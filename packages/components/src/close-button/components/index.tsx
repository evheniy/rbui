import React, { FC } from 'react';

import cn from 'classnames';

import { CloseButtonProps as P } from '../types';

const CloseButton:FC<P> = ({ className, ...props }) => (
  <button
    type="button"
    aria-label={props['aria-label'] || 'Close'}
    className={cn('btn-close', className)}
    {...props}
  />
);

CloseButton.displayName = 'CloseButton';

export default CloseButton;
