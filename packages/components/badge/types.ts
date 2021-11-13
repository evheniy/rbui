import { ComponentProps } from 'react';

import { Colors, Pill, Circle } from '@rbui/core/variant/types';

export interface BadgeProps extends Colors, Pill, Circle, ComponentProps<'span'> {}

export interface MapBadgeProps {
  (props: BadgeProps): ComponentProps<'span'>;
}
