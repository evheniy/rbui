export type OnlyOne<T> = Pick<T, Exclude<keyof T, keyof T>> & {
  [K in keyof T]-?:
  Pick<T, K>
  & Partial<Record<Exclude<keyof T, K>, false | undefined>>
}[keyof T];

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
