import React, { ComponentPropsWithRef, FC, forwardRef } from 'react';

/**
 * HTML button with ref
 */
const Button: FC<ComponentPropsWithRef<'button'>> = forwardRef((props, ref) => <button type="button" {...props} ref={ref} />);
Button.displayName = 'button';

export default Button;
