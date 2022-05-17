import {
  Break,
  Capitalize,
  Center,
  ClassName,
  End,
  Lg,
  Lowercase,
  Md,
  Muted,
  NoWrap,
  OnlyOne,
  Required,
  Reset,
  Sm,
  Start,
  Undefined,
  Uppercase,
  Wrap,
  Xl,
} from '@rbui/core/props/types';

type NoSize = Undefined<Sm & Md & Lg & Xl>;

type RequiredPosition = OnlyOne<Required<Start> & Required<Center> & Required<End>>;

type PositionSize = OnlyOne<Sm & Md & Lg & Xl> & RequiredPosition;

type Position = (OnlyOne<Start & Center & End> & NoSize) | PositionSize;

type Wrapping = OnlyOne<Wrap & NoWrap>;

type Transform = OnlyOne<Lowercase & Uppercase & Capitalize>;

type FontSize = {
  fs?: '1' | '2' | '3' | '4' | '5' | '6';
};

type FontWeight = {
  fw?: 'bold' | 'bolder' | 'normal' | 'light' | 'lighter';
};

type FontStyle = {
  fst?: 'italic' | 'normal';
};

type LineHeight = {
  lh?: '1' | 'sm' | 'base' | 'lg';
};

type Monospace = {
  monospace?: boolean;
};

type Decoration = {
  decoration?: 'underline' | 'line-through' | 'none';
};

export type Text = (
  Position
  & Wrapping
  & Break
  & Transform
  & FontSize
  & FontWeight
  & FontStyle
  & LineHeight
  & Monospace
  & Muted
  & Reset
  & Decoration
);

export type TextProps = Text & ClassName;
export type MapProps = (props: TextProps) => ClassName;
export type MapClassName = (props: TextProps) => string;
