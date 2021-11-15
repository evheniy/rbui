import { ComponentPropsWithRef } from 'react';

import { White } from '@rbui/core/variant/types';

export interface CloseButtonProps extends White, ComponentPropsWithRef<'button'> {}

export interface MapCloseButtonProps {
  (props: CloseButtonProps): ComponentPropsWithRef<'button'>;
}
