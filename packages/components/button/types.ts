import {
  AriaAttributes,
  ComponentPropsWithRef,
  DOMAttributes,
  HTMLAttributes,
} from 'react';

import {
  Active,
  ClassName,
  Color,
  Colors,
  Disabled,
  Href,
  Link,
  Nowrap,
  OnlyOne,
  Outline,
  Size,
  Sizes,
  Toggle,
} from '@rbui/core/props/types';

type BaseProps = Color & Link & Outline & Size & Nowrap & Toggle & OnlyOne<Active & Disabled>;

export type ButtonProps = BaseProps & ComponentPropsWithRef<'button'>;
export type MapButtonProps = (props: ButtonProps) => ComponentPropsWithRef<'button'>;

export type InputProps = BaseProps & ComponentPropsWithRef<'input'>;
export type MapInputProps = (props: InputProps) => ComponentPropsWithRef<'input'>;

export type LinkProps = BaseProps & ComponentPropsWithRef<'a'>;
export type MapLinkProps = (props: LinkProps) => ComponentPropsWithRef<'a'>;
export type MapLinkHref = (props: Href & Disabled) => Href;
export type MapLinkTabIndex = (props: Disabled) => Pick<HTMLAttributes<HTMLAnchorElement>, 'tabIndex'>;

export type Validate = (props: Colors & Link & Sizes) => void;
export type MapAria = (props: Active & Disabled) => AriaAttributes;
export type MapClassName = (props: Nowrap & Sizes & Outline & Colors & Active & Disabled & Link & ClassName) => string;
export type Action = <T>(props: Active & Toggle & Pick<DOMAttributes<T>, 'onClick'>) => Active & Pick<DOMAttributes<T>, 'onClick'>;
