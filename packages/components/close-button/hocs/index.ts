import { ComponentProps } from 'react';

import cn from 'classnames';

import mapProps from '@rbui/core/hoc/props';

import { CloseButtonProps as P } from '../types';

const withCloseButton = mapProps<P, ComponentProps<'button'>>(({ white, ...props }) => {
  const newProps = { ...props };

  newProps.type = newProps.type || 'button';
  newProps['aria-label'] = newProps['aria-label'] || 'Close';
  newProps.className = cn('btn-close', { 'btn-close-white': !!white }, newProps.className);

  return newProps;
});

export default withCloseButton;
