import { ComponentProps, CSSProperties } from 'react';

export interface Style extends CSSProperties {
  '--bs-breadcrumb-divider'?: string;
}

export interface BreadcrumbProps extends ComponentProps<'nav'>{
  divider?: string;
}

export interface ItemProps extends ComponentProps<'li'>{
  active?: boolean;
  href?: string;
}
