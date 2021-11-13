import { FC } from 'react';
import withToggle from './hoc/toogle';

import { ButtonProps, InputProps, LinkProps } from './types';

import ButtonComponent from './components/Button';
import InputComponent from './components/Input';
import LinkComponent from './components/Link';

const Button = withToggle(ButtonComponent) as FC<ButtonProps>;
Button.displayName = 'Button';

const Input = withToggle(InputComponent) as FC<InputProps>;
Input.displayName = 'Input';

const Link = withToggle(LinkComponent) as FC<LinkProps>;
Link.displayName = 'Link';

export default Button;

export {
  Input,
  Link,
};

export type {
  ButtonProps,
  InputProps,
  LinkProps,
};
