import { ComponentPropsWithRef } from 'react';

import {
  Horizontal,
  Flush,
  Active,
  Disabled,
  Color,
} from '@rbui/core/variant/types';

type BaseItemProps = Active & Disabled & Color;

export interface ListGroupProps extends Horizontal, Flush, ComponentPropsWithRef<'ul'> {}

export type ItemProps = BaseItemProps & ComponentPropsWithRef<'li'>;

export interface NumberedGroupProps extends Horizontal, Flush, ComponentPropsWithRef<'ol'> {}

export interface ActiveGroupProps extends Horizontal, Flush, ComponentPropsWithRef<'div'> {}

export type LinkItemProps = BaseItemProps & ComponentPropsWithRef<'a'>;

export type ButtonItemProps = BaseItemProps & ComponentPropsWithRef<'button'>;

export interface GroupClassName extends Horizontal, Flush {
  base: string[];
  className?: string;
}

export interface MapListGroupProps {
  (props: ListGroupProps): ComponentPropsWithRef<'ul'>;
}

export interface MapNumberedGroupProps {
  (props: NumberedGroupProps): ComponentPropsWithRef<'ol'>;
}

export interface MapActiveGroupProps {
  (props: ActiveGroupProps): ComponentPropsWithRef<'div'>;
}

export interface MapItemProps {
  (props: ItemProps): ComponentPropsWithRef<'li'>;
}

export interface MapLinkItemProps {
  (props: LinkItemProps): ComponentPropsWithRef<'a'>;
}

export interface MapButtonItemProps {
  (props: ButtonItemProps): ComponentPropsWithRef<'button'>;
}
