import { ButtonHTMLAttributes } from 'react';

import { ReactTestRenderer } from 'react-test-renderer';

export interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ['aria-label']?: string;
  white?: boolean;
}

export interface CloseButtonTest {
  (result: ReactTestRenderer, props: CloseButtonProps): void;
}
