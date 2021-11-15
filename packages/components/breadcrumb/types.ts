import { ComponentPropsWithRef, CSSProperties } from 'react';

export interface Style extends CSSProperties {
  '--bs-breadcrumb-divider'?: string;
}

export interface BreadcrumbProps extends ComponentPropsWithRef<'nav'>{
  divider?: string;
}

export interface ItemProps extends ComponentPropsWithRef<'li'>{
  active?: boolean;
  href?: string;
}
