import React, {
  ComponentProps,
  ComponentPropsWithRef,
  FC,
  forwardRef,
} from 'react';

/**
 * HTML anchor (a) with ref
 */
const Link: FC<ComponentPropsWithRef<'a'>> = forwardRef(({ children, ...props }: ComponentProps<'a'>, ref) => <a {...props} ref={ref}>{children}</a>);
Link.displayName = 'a';

export default Link;
