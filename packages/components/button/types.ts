import { ComponentProps } from 'react';

export enum ButtonTypes {
  'button' = 'button',
  'submit' = 'submit',
  'reset' = 'reset',
}

export interface BaseProps {
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
}

export interface ButtonProps extends BaseProps, ComponentProps<'button'> {
  type?: ButtonTypes;
}

export interface InputProps extends BaseProps, ComponentProps<'input'> {
  value?: string;
}

export interface LinkProps extends BaseProps, ComponentProps<'a'> {
  disabled?: boolean;
}
