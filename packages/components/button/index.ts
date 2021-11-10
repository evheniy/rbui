import { FC } from 'react';
import toggle, { P } from './hoc/toogle';

import { ButtonProps, InputProps, LinkProps } from './types';

import ButtonComponent from './components/Button';
import InputComponent from './components/Input';
import LinkComponent from './components/Link';

const Button = toggle(ButtonComponent as FC<P>) as FC<ButtonProps>;
Button.displayName = 'Button';

const Input = toggle(InputComponent as FC<P>) as FC<InputProps>;
Input.displayName = 'Input';

const Link = toggle(LinkComponent as FC<P>) as FC<LinkProps>;
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
