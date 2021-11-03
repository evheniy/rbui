import React, { FC } from 'react';

import cn from 'classnames';

import { LinkProps as P } from '../types';

const Link:FC<P> = props => {
  const {
    href,
    className,
    children,
    ...rest
  } = props;

  return (
    <a
      className={cn('page-link', className)}
      href={href || undefined}
      {...rest}
    >
      {children}
    </a>
  );
};

Link.displayName = 'Link';

export default Link;
