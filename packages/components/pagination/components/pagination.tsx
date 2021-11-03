import React, { FC } from 'react';

import cn from 'classnames';

import variant from '@rbui/core/variant';

import { PaginationProps as P } from '../types';

const Pagination:FC<P> = props => {
  const {
    className,
    sm = false,
    lg = false,
    children,
    ...rest
  } = props;

  const classes = ['pagination'];

  const size = variant({ lg, sm });

  if (size) {
    classes.push(`pagination-${size}`);
  }

  return (
    <nav {...rest}>
      <ul className={cn(...classes, className)}>
        {children}
      </ul>
    </nav>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
