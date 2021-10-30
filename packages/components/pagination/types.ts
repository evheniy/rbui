import {
  DetailedHTMLProps,
  LiHTMLAttributes,
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from 'react';

import { ReactTestRenderer } from 'react-test-renderer';

export interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href?: string;
}

export interface ItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
}

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode;
}

export interface LinkTest {
  (result: ReactTestRenderer, props: LinkProps): void;
}

export interface ItemTest {
  (result: ReactTestRenderer, props: ItemProps): void;
}

export interface PaginationTest {
  (result: ReactTestRenderer, props: PaginationProps): void;
}
