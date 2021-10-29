import { FC, FCP } from '@rbui/core/types';

import toggle from './hoc/toogle';

import { ButtonProps, InputProps, LinkProps } from './types';

import ButtonComponent from './components/Button';
import InputComponent from './components/Input';
import LinkComponent from './components/Link';

const Button = toggle(ButtonComponent as FCP) as FC<ButtonProps>;
Button.displayName = 'Button';

const Input = toggle(InputComponent as FCP) as FC<InputProps>;
Input.displayName = 'Input';

const Link = toggle(LinkComponent as FCP) as FC<LinkProps>;
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
