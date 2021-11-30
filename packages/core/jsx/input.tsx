import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

/**
 * HTML input with ref
 */
const Input: FC<ComponentPropsWithRef<'input'>> = forwardRef((props, ref) => <input {...props} ref={ref} />);
Input.displayName = 'input';

export default Input;
