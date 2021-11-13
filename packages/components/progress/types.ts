import { ComponentProps } from 'react';

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

export interface ProgressProps extends BaseProps, ComponentProps<'div'> {}

export interface BarProps extends BaseProps, ComponentProps<'div'> {}
