import { ComponentProps } from 'react';

import { Grow, Colors, Sizes } from '@rbui/core/variant/types';

export interface SpinnerProps extends Grow, Colors, Pick<Sizes, 'sm'>, ComponentProps<'span'> {}

export interface MapSpinnerProps {
  (props: SpinnerProps): ComponentProps<'span'>;
}
