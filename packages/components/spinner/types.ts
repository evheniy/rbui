import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ReactTestRenderer } from 'react-test-renderer';

export interface SpinnerProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  grow?: boolean;

  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  info?: boolean;
  light?: boolean;
  dark?: boolean;

  sm?: boolean;
}

export interface CloseButtonTest {
  (result: ReactTestRenderer, props: SpinnerProps): void;
}
