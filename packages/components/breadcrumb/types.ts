import { ComponentPropsWithRef, CSSProperties, AriaAttributes } from 'react';

import {
  Divider,
  Active,
  Href,
  ClassName,
} from '@rbui/core/props/types';

export type Style = CSSProperties & {
  '--bs-breadcrumb-divider'?: string;
};

export type BreadcrumbProps = Divider & ComponentPropsWithRef<'nav'>;
export type MapBreadcrumbProps = (props: BreadcrumbProps) => ComponentPropsWithRef<'nav'>;
export type MapBreadcrumbStyle = (props: Divider & { style?: CSSProperties }) => Style;

export type ItemProps = Active & Href & ComponentPropsWithRef<'li'>;
export type MapItemProps = (props: ItemProps) => ComponentPropsWithRef<'li'>;
export type MapItemAria = (props: Active) => AriaAttributes;
export type MapItemClassName = (props: Active & ClassName) => string;
