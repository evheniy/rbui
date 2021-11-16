import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

import { ItemProps as P } from '../types';

const List: FC<ComponentPropsWithRef<'li'>> = forwardRef(({ children, href, ...props }: P, ref) => (
  <li {...props} ref={ref}>
    <a href={href || undefined}>
      {children}
    </a>
  </li>
));
List.displayName = 'li';

export default List;
