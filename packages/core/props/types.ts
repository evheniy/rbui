export type OnlyOne<T> = Pick<T, Exclude<keyof T, keyof T>> & {
  [K in keyof T]-?: Pick<T, K> & Partial<Record<Exclude<keyof T, K>, false | undefined>>
}[keyof T];

export type Required<T> = {
  [P in keyof T]-?: true;
};

export type Undefined<T> = {
  [P in keyof T]?: undefined;
};

export type ClassName = {
  className?: string;
};

export type Primary = {
  primary?: boolean;
};

export type Secondary = {
  secondary?: boolean;
};

export type Success = {
  success?: boolean;
};

export type Danger = {
  danger?: boolean;
};

export type Warning = {
  warning?: boolean;
};

export type Info = {
  info?: boolean;
};

export type Light = {
  light?: boolean;
};

export type Dark = {
  dark?: boolean;
};

export type Colors = Primary & Secondary & Success & Danger & Warning & Info & Light & Dark;

export type Color = OnlyOne<Colors>;

export type White = {
  white?: boolean;
};

export type Link = {
  link?: boolean;
};

export type Outline = {
  outline?: boolean;
};

export type Large = {
  lg?: boolean;
};

export type Small = {
  sm?: boolean;
};

export type Sizes = Large & Small;

export type Size = OnlyOne<Sizes>;

export type Pill = {
  pill?: boolean;
};

export type Circle = {
  circle?: boolean;
};

export type Nowrap = {
  nowrap?: boolean;
};

export type Disabled = {
  disabled?: boolean;
};

export type Active = {
  active?: boolean;
};

export type Toggle = {
  toggle?: boolean;
};

export type Grow = {
  grow?: boolean;
};

export type Horizontal = {
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

export type Flush = {
  flush?: boolean;
};

export type Divider = {
  divider?: string;
};

export type Striped = {
  striped?: boolean;
};

export type Animated = {
  animated?: boolean;
};

export type Label = {
  label?: boolean;
};

export type Progress = {
  min?: number;
  max?: number;
  now?: number;
};

export type Href = {
  href?: string;
};

export type Custom = {
  custom?: boolean;
};

export type Vertical = {
  vertical?: boolean;
};

export type Start = {
  start?: boolean;
};

export type Center = {
  center?: boolean;
};

export type End = {
  end?: boolean;
};

export type Sm = {
  sm?: boolean;
};

export type Md = {
  md?: boolean;
};

export type Lg = {
  lg?: boolean;
};

export type Xl = {
  xl?: boolean;
};

export type Wrap = {
  wrap?: boolean;
};

export type NoWrap = {
  nowrap?: boolean;
};

export type Break = {
  break?: boolean;
};

export type Lowercase = {
  lowercase?: boolean;
};

export type Uppercase = {
  uppercase?: boolean;
};

export type Capitalize = {
  capitalize?: boolean;
};

export type Muted = {
  muted?: boolean;
};

export type Reset = {
  reset?: boolean;
};
