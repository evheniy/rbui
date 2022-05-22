import React, { ComponentPropsWithRef, FC, forwardRef } from 'react';

import { BreadcrumbProps as P } from '../types';

const Nav: FC<ComponentPropsWithRef<'nav'>> = forwardRef(({ children, ...props }: P, ref) => (
  <nav {...props} ref={ref}>
    <ol className="breadcrumb">
      {children}
    </ol>
  </nav>
));
Nav.displayName = 'nav';

export default Nav;
