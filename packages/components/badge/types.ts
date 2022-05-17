import { ComponentPropsWithRef } from 'react';

import {
  Circle,
  ClassName,
  Color,
  Colors,
  OnlyOne,
  Pill,
} from '@rbui/core/props/types';

export type BadgeProps = Color & OnlyOne<Pill & Circle> & ComponentPropsWithRef<'span'>;
export type MapBadgeProps = (props: BadgeProps) => ComponentPropsWithRef<'span'>;
export type MapBadgeClassName = (props: Colors & Pill & Circle & ClassName) => string;
