import { ComponentPropsWithRef, ReactNode } from 'react';

import {
  ClassName,
  Color,
  Colors,
  Grow,
  Small,
} from '@rbui/core/props/types';

export type SpinnerProps = Grow & Small & Color & ComponentPropsWithRef<'span'>;
export type MapSpinnerProps = (props: SpinnerProps) => ComponentPropsWithRef<'span'>;
export type MapSpinnerClassName = (props: Grow & Small & Colors & ClassName) => string;
export type MapSpinnerChildren = (children?: ReactNode) => ReactNode;
