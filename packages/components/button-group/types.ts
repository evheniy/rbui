import { ComponentProps } from 'react';

export interface ButtonGroupProps extends ComponentProps<'div'> {
  ['aria-label']?: string;
  lg?: boolean;
  sm?: boolean;
  vertical?: boolean;
}

export interface ButtonToolbarProps extends ComponentProps<'div'> {
  ['aria-label']?: string;
}
