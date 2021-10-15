import { HTMLProps } from 'react';
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
  setActive?: () => void,
}

export interface Variant {
  (variants: { [key: string]: boolean }): string | undefined;
}

export interface ButtonProps extends ComponentProps, HTMLProps<HTMLButtonElement> {
  type?: ButtonTypes;
}

export interface LinkProps extends ComponentProps, HTMLProps<HTMLAnchorElement> {
  disabled?: boolean;
}
export interface InputProps extends ComponentProps, HTMLProps<HTMLInputElement> {
  value: string;
}

export interface ButtonTest {
  (result: ReactTestRenderer, props: ButtonProps): void;
}

export interface LinkTest {
  (result: ReactTestRenderer, props: LinkProps): void;
}

export interface InputTest {
  (result: ReactTestRenderer, props: InputProps): void;
}
