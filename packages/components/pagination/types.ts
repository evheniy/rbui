import {
  ComponentPropsWithRef,
  AriaAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

import {
  OnlyOne,
  Large,
  Small,
  Size,
  Active,
  Disabled,
  Href,
  Custom,
  ClassName,
} from '@rbui/core/props/types';

export type LinkProps = ComponentPropsWithRef<'a'>;
export type MapLinkProps = (props: LinkProps) => LinkProps;
export type MapLinkClassName = (props: ClassName) => string;

export type TextProps = ComponentPropsWithRef<'span'>;
export type MapTextProps = (props: TextProps) => TextProps;

export type ItemProps = OnlyOne<Active & Disabled> & Href & Custom & ComponentPropsWithRef<'li'>;
export type MapItemProps = (props: ItemProps) => ComponentPropsWithRef<'li'>;
export type MapItemClassName = (props: Active & Disabled & ClassName) => string;
export type MapItemAria = (props: Active) => AriaAttributes;
export type MapItemChildren = (props: PropsWithChildren<Custom & Href & Active & Disabled>) => ReactNode;

export type PaginationProps = Size & ComponentPropsWithRef<'nav'>;
export type MapPaginationProps = (props: PaginationProps) => ComponentPropsWithRef<'nav'>;
export type MapPaginationClassName = (props: ClassName & Large & Small) => string;
