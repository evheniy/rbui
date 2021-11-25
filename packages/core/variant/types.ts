type OnlyOne<T> =
    Pick<T, Exclude<keyof T, keyof T>>
    & {
      [K in keyof T]-?:
      Pick<T, K>
      & Partial<Record<Exclude<keyof T, K>, false | undefined>>
    }[keyof T];

export interface Variant {
  (
    variants?: { [key: string]: boolean | undefined },
    defaultValue?: string
  ): string | undefined;
}

export interface Colors {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  info?: boolean;
  light?: boolean;
  dark?: boolean;
}

export type Color = OnlyOne<Colors>;

export interface White {
  white?: boolean;
}

export interface Link {
  link?: boolean;
}

export interface Outline {
  outline?: boolean;
}

export interface Sizes {
  lg?: boolean;
  sm?: boolean;
}

export interface Pill {
  pill?: boolean;
}

export interface Circle {
  circle?: boolean;
}

export interface Nowrap {
  nowrap?: boolean;
}

export interface Disabled {
  disabled?: boolean;
}

export interface Active {
  active?: boolean;
}

export interface Toggle extends Active {
  toggle?: boolean;
}

export interface Grow {
  grow?: boolean;
}

export interface Progress {
  min?: number;
  max?: number;
  now?: number;
  label?: boolean;
  striped?: boolean;
  animated?: boolean;
}

export enum Breakpoints {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

export interface Horizontal {
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export interface Flush {
  flush?: boolean;
}
