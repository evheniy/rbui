import React, { ComponentPropsWithRef, FC, forwardRef } from 'react';

import { PaginationProps as P } from '../types';

const Pagination: FC<ComponentPropsWithRef<'nav'>> = forwardRef(({ className, children, ...rest }: P, ref) => (
  <nav {...rest} ref={ref}>
    <ul className={className}>
      {children}
    </ul>
  </nav>
));
Pagination.displayName = 'nav';

export default Pagination;
