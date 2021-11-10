import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LinkHTMLAttributes,
} from 'react';

import { ReactTestRenderer } from 'react-test-renderer';

export enum ButtonTypes {
  'button' = 'button',
  'submit' = 'submit',
  'reset' = 'reset',
}

interface ComponentProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  info?: boolean;
  light?: boolean;
  dark?: boolean;
  link?: boolean;
  outline?: boolean;
  lg?: boolean;
  sm?: boolean;
  nowrap?: boolean;
  toggle?: boolean;
  active?: boolean;
  setActive?: () => void;
}

export interface ButtonProps extends ComponentProps, ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonTypes;
}

export interface InputProps extends ComponentProps, InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

export interface LinkProps extends ComponentProps, LinkHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}

export interface ButtonTest {
  (result: ReactTestRenderer, props: ButtonProps): void;
}

export interface InputTest {
  (result: ReactTestRenderer, props: InputProps): void;
}

export interface LinkTest {
  (result: ReactTestRenderer, props: LinkProps): void;
}
