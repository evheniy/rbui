import React, { ComponentPropsWithRef, FC, forwardRef } from 'react';

/**
 * HTML div with ref
 */
const Div: FC<ComponentPropsWithRef<'div'>> = forwardRef((props, ref) => <div {...props} ref={ref} />);
Div.displayName = 'div';

export default Div;
