import { ComponentPropsWithRef } from 'react';

import {
  Horizontal,
  Flush,
  Active,
  Disabled,
  Colors,
  Breakpoints,
} from '@rbui/core/variant/types';

export { Breakpoints };

interface BaseItemProps extends Active, Disabled, Colors {}

export interface ListGroupProps extends Horizontal, Flush, ComponentPropsWithRef<'ul'> {}

export interface ItemProps extends BaseItemProps, ComponentPropsWithRef<'li'> {}

export interface NumberedGroupProps extends Horizontal, Flush, ComponentPropsWithRef<'ol'> {}

export interface ActiveGroupProps extends Horizontal, Flush, ComponentPropsWithRef<'div'> {}

export interface LinkItemProps extends BaseItemProps, ComponentPropsWithRef<'a'> {}

export interface ButtonItemProps extends BaseItemProps, ComponentPropsWithRef<'button'> {}

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
