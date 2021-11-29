import { ComponentPropsWithRef, AriaAttributes } from 'react';

import {
  OnlyOne,
  Horizontal,
  Flush,
  Active,
  Disabled,
  Color,
  Colors,
  ClassName,
} from '@rbui/core/props/types';

type Numbered = {
  numbered?: boolean;
};

type Action = {
  action?: boolean;
};

type BaseGroupProps = OnlyOne<Horizontal & Flush>;

export type ListGroupProps = BaseGroupProps & ComponentPropsWithRef<'ul'>;
export type MapListGroupProps = (props: ListGroupProps) => ComponentPropsWithRef<'ul'>;

export type NumberedGroupProps = BaseGroupProps & ComponentPropsWithRef<'ol'>;
export type MapNumberedGroupProps = (props: NumberedGroupProps) => ComponentPropsWithRef<'ol'>;

export type ActiveGroupProps = BaseGroupProps & ComponentPropsWithRef<'div'>;
export type MapActiveGroupProps = (props: ActiveGroupProps) => ComponentPropsWithRef<'div'>;

export type MapGroupClassName = (props: Numbered & Horizontal & Flush & ClassName) => string;

type BaseItemProps = OnlyOne<Active & Disabled> & Color;

export type ItemProps = BaseItemProps & ComponentPropsWithRef<'li'>;
export type MapItemProps = (props: ItemProps) => ComponentPropsWithRef<'li'>;

export type LinkItemProps = BaseItemProps & ComponentPropsWithRef<'a'>;
export type MapLinkItemProps = (props: LinkItemProps) => ComponentPropsWithRef<'a'>;

export type ButtonItemProps = BaseItemProps & ComponentPropsWithRef<'button'>;
export type MapButtonItemProps = (props: ButtonItemProps) => ComponentPropsWithRef<'button'>;

export type MapItemAria = (props: Active & Disabled) => AriaAttributes;
export type MapItemClassName = (props: Colors & Action & Active & Disabled & ClassName) => string;
