import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ReactTestRenderer } from 'react-test-renderer';

export interface ButtonGroupProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ['aria-label']?: string;
  lg?: boolean;
  sm?: boolean;
  vertical?: boolean;
}

export interface ButtonToolbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ['aria-label']?: string;
}

export interface ButtonGroupTest {
  (result: ReactTestRenderer, props: ButtonGroupProps): void;
}

export interface ButtonToolbarTest {
  (result: ReactTestRenderer, props: ButtonToolbarProps): void;
}
