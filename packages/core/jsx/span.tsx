import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

/**
 * HTML span with ref
 */
const Span: FC<ComponentPropsWithRef<'span'>> = forwardRef((props, ref) => <span {...props} ref={ref} />);
Span.displayName = 'span';

export default Span;
