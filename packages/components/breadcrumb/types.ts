import {
  DetailedHTMLProps,
  LiHTMLAttributes,
  HTMLAttributes,
  CSSProperties,
} from 'react';

import { ReactTestRenderer } from 'react-test-renderer';

export interface Style extends CSSProperties {
  '--bs-breadcrumb-divider'?: string;
}

export interface BreadcrumbProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
  divider?: string;
}

export interface ItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>{
  active?: boolean;
  href?: string;
}

export interface BreadcrumbTest {
  (result: ReactTestRenderer, props: BreadcrumbProps): void;
}

export interface ItemTest {
  (result: ReactTestRenderer, props: ItemProps): void;
}
