import { ComponentProps } from 'react';

export interface LinkProps extends ComponentProps<'a'> {
  href?: string;
}

export type TextProps = ComponentProps<'span'>;

export interface ItemProps extends ComponentProps<'li'> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  custom?: boolean;
}

export interface PaginationProps extends ComponentProps<'nav'> {
  sm?: boolean;
  lg?: boolean;
}
