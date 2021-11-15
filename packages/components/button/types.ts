import { ComponentPropsWithRef } from 'react';

import {
  Colors,
  Link,
  Outline,
  Sizes,
  Nowrap,
  Toggle,
} from '@rbui/core/variant/types';

export enum ButtonTypes {
  'button' = 'button',
  'submit' = 'submit',
  'reset' = 'reset',
}

interface BaseProps extends Colors, Link, Outline, Sizes, Nowrap, Toggle {}

export interface ButtonProps extends BaseProps, ComponentPropsWithRef<'button'> {
  type?: ButtonTypes;
}

export interface InputProps extends BaseProps, ComponentPropsWithRef<'input'> {
  value?: string;
}

export interface LinkProps extends BaseProps, ComponentPropsWithRef<'a'> {
  disabled?: boolean;
}

export interface MapButtonProps {
  (props: ButtonProps): ComponentPropsWithRef<'button'>;
}

export interface MapInputProps {
  (props: InputProps): ComponentPropsWithRef<'input'>;
}

export interface MapLinkProps {
  (props: LinkProps): ComponentPropsWithRef<'a'>;
}
