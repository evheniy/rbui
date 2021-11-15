import React, {
  FC,
  ComponentPropsWithRef,
  forwardRef,
  ComponentProps,
} from 'react';

const Link: FC<ComponentPropsWithRef<'a'>> = forwardRef(({ children, ...props }: ComponentProps<'a'>, ref) => <a {...props} ref={ref}>{children}</a>);
Link.displayName = 'a';

export default Link;
