import React, {
  FC,
  ComponentPropsWithRef,
  forwardRef,
  ComponentProps,
} from 'react';

const Pagination: FC<ComponentPropsWithRef<'nav'>> = forwardRef(({ className, children, ...rest }: ComponentProps<'nav'>, ref) => (
  <nav {...rest} ref={ref}>
    <ul className={className}>
      {children}
    </ul>
  </nav>
));
Pagination.displayName = 'nav';

export default Pagination;
