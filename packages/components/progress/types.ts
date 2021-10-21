import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ReactTestRenderer } from 'react-test-renderer';

interface BaseProps {
  min?: number;
  max?: number;
  now?: number;
  label?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  striped?: boolean;
  animated?: boolean;
}

export interface ProgressProps extends BaseProps, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export interface BarProps extends BaseProps, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export interface ProgressTest {
  (result: ReactTestRenderer, props: ProgressProps): void;
}

export interface BarTest {
  (result: ReactTestRenderer, props: BarProps): void;
}
