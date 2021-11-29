import {
  ComponentPropsWithRef,
  AriaAttributes,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
} from 'react';

import {
  OnlyOne,
  Success,
  Info,
  Warning,
  Danger,
  Striped,
  Animated,
  Label,
  Progress,
  ClassName,
} from '@rbui/core/props/types';

type Colors = Success & Info & Warning & Danger;

export type BaseProps = Striped & Animated & Label & Progress & OnlyOne<Colors>;

export type ProgressProps = BaseProps & ComponentPropsWithRef<'div'>;
export type MapProgressProps = (props: ProgressProps) => ComponentPropsWithRef<'div'>;
export type MapProgressClassName = (props: ClassName) => string;
export type MapProgressChildren = (props: PropsWithChildren<BaseProps>) => ReactNode;

export type BarProps = BaseProps & ComponentPropsWithRef<'div'>;
export type MapBarProps = (props: BarProps) => ComponentPropsWithRef<'div'>;
export type MapBarClassName = (props: Colors & Danger & Striped & Animated & ClassName) => string;
export type MapBarAria = (props: Progress) => AriaAttributes;
export type MapBarStyle = (props: Pick<Progress, 'now'> & { style?: CSSProperties }) => CSSProperties;
export type MapBarChildren = (props: PropsWithChildren<Label & Pick<Progress, 'now'>>) => ReactNode;
