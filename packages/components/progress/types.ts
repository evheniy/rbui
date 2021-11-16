import { ComponentPropsWithRef } from 'react';

import { Progress, Colors } from '@rbui/core/variant/types';

interface BaseProps extends Progress, Pick<Colors, 'success' | 'info' | 'warning' | 'danger'> {}

export interface ProgressProps extends BaseProps, ComponentPropsWithRef<'div'> {}

export interface BarProps extends BaseProps, ComponentPropsWithRef<'div'> {}

export interface MapProgressProps {
  (props: ProgressProps): ComponentPropsWithRef<'div'>;
}

export interface MapBarProps {
  (props: BarProps): ComponentPropsWithRef<'div'>;
}
