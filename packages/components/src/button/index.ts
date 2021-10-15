import { FC, FCP } from '@rb/core/types';

import toggle from './hoc/toogle';

import { ButtonProps, InputProps } from './types';

import ButtonComponent from './components/Button';
import InputComponent from './components/Input';

const Button = toggle(ButtonComponent as FCP) as FC<ButtonProps>;
Button.displayName = 'ButtonWithToggle';

const Input = toggle(InputComponent as FCP) as FC<InputProps>;
Input.displayName = 'InputWithToggle';

export default Button;

export { Input };
