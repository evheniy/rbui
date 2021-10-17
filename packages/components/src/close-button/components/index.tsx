import React, { FC } from 'react';

import cn from 'classnames';

import { CloseButtonProps as P } from '../types';

const CloseButton:FC<P> = ({ className, white, ...props }) => (
  <button
    type="button"
    aria-label={props['aria-label'] || 'Close'}
    className={cn('btn-close', { 'btn-close-white': white }, className)}
    {...props}
  />
);

CloseButton.displayName = 'CloseButton';

export default CloseButton;
