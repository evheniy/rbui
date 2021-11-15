import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

const Span: FC<ComponentPropsWithRef<'span'>> = forwardRef((props, ref) => <span {...props} ref={ref} />);
Span.displayName = 'span';

export default Span;
