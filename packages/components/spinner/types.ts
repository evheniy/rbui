import { ComponentPropsWithRef } from 'react';

import { Grow, Colors, Sizes } from '@rbui/core/variant/types';

export interface SpinnerProps extends Grow, Colors, Pick<Sizes, 'sm'>, ComponentPropsWithRef<'span'> {}

export interface MapSpinnerProps {
  (props: SpinnerProps): ComponentPropsWithRef<'span'>;
}
