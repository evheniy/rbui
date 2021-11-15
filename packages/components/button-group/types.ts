import { ComponentPropsWithRef } from 'react';

export interface ButtonGroupProps extends ComponentPropsWithRef<'div'> {
  ['aria-label']?: string;
  lg?: boolean;
  sm?: boolean;
  vertical?: boolean;
}

export interface ButtonToolbarProps extends ComponentPropsWithRef<'div'> {
  ['aria-label']?: string;
}
