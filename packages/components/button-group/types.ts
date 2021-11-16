import { ComponentPropsWithRef } from 'react';

import { Sizes } from '@rbui/core/variant/types';

export interface ButtonGroupProps extends Sizes, ComponentPropsWithRef<'div'> {
  ['aria-label']?: string;
  vertical?: boolean;
}

export interface ButtonToolbarProps extends ComponentPropsWithRef<'div'> {
  ['aria-label']?: string;
}

export interface MapButtonGroupProps {
  (props: ButtonGroupProps): ComponentPropsWithRef<'div'>;
}

export interface MapButtonToolbarProps {
  (props: ButtonToolbarProps): ComponentPropsWithRef<'div'>;
}
