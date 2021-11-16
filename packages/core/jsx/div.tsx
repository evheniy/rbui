import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

const Div: FC<ComponentPropsWithRef<'div'>> = forwardRef((props, ref) => <div {...props} ref={ref} />);
Div.displayName = 'div';

export default Div;
