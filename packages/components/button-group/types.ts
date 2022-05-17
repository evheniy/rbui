import { ComponentPropsWithRef } from 'react';

import {
  ClassName,
  Large,
  Size,
  Small,
  Vertical,
} from '@rbui/core/props/types';

export type ButtonGroupProps = Size & Vertical & ComponentPropsWithRef<'div'>;
export type MapButtonGroupProps = (props: ButtonGroupProps) => ComponentPropsWithRef<'div'>;
export type MapButtonGroupClassName = (props: Vertical & Large & Small & ClassName) => string;

export type ButtonToolbarProps = ComponentPropsWithRef<'div'>;
export type MapButtonToolbarProps = (props: ButtonToolbarProps) => ComponentPropsWithRef<'div'>;
export type MapButtonToolbarClassName = (props: ClassName) => string;
