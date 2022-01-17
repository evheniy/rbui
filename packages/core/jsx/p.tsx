import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

/**
 * HTML paragraph with ref
 */
const P: FC<ComponentPropsWithRef<'p'>> = forwardRef((props, ref) => <p {...props} ref={ref} />);
P.displayName = 'p';

export default P;
