import { ComponentPropsWithRef } from 'react';

import { Colors, Pill, Circle } from '@rbui/core/variant/types';

export interface BadgeProps extends Colors, Pill, Circle, ComponentPropsWithRef<'span'> {}

export interface MapBadgeProps {
  (props: BadgeProps): ComponentPropsWithRef<'span'>;
}
