import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

const Button: FC<ComponentPropsWithRef<'button'>> = forwardRef((props, ref) => <button type="button" {...props} ref={ref} />);
Button.displayName = 'button';

export default Button;
