import React, { FC } from 'react';

import cn from 'classnames';

import { TextProps as P } from '../types';

const Text:FC<P> = ({ className, ...props }) => (
  <span className={cn('page-link', className)} {...props} />
);

Text.displayName = 'Link';

export default Text;
