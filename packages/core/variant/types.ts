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

export interface Toggle {
  toggle?: boolean;
  active?: boolean;
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
