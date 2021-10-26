import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ReactTestRenderer } from 'react-test-renderer';

export type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface CardTest {
  (result: ReactTestRenderer, props: CardProps): void;
}
