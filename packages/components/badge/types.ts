import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ReactTestRenderer } from 'react-test-renderer';

export interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  info?: boolean;
  light?: boolean;
  dark?: boolean;

  pill?: boolean;
  circle?: boolean;
}

export interface BadgeTest {
  (result: ReactTestRenderer, props: BadgeProps): void;
}
