import { ComponentPropsWithRef } from 'react';

import { Sizes } from '@rbui/core/variant/types';

export type LinkProps = ComponentPropsWithRef<'a'>;

export type TextProps = ComponentPropsWithRef<'span'>;

export interface ItemProps extends ComponentPropsWithRef<'li'> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  custom?: boolean;
}

export interface PaginationProps extends Sizes, ComponentPropsWithRef<'nav'> {}

export interface MapLinkProps {
  (props: LinkProps): ComponentPropsWithRef<'a'>;
}

export interface MapTextProps {
  (props: TextProps): ComponentPropsWithRef<'span'>;
}

export interface MapItemProps {
  (props: ItemProps): ComponentPropsWithRef<'li'>;
}

export interface MapPaginationProps {
  (props: PaginationProps): ComponentPropsWithRef<'nav'>;
}
