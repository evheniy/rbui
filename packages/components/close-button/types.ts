import { ComponentPropsWithRef } from 'react';

import { White, ClassName } from '@rbui/core/props/types';

export type CloseButtonProps = White & ComponentPropsWithRef<'button'>;

export type MapCloseButtonProps = (props: CloseButtonProps) => ComponentPropsWithRef<'button'>;

export type MapClassName = (props: White & ClassName) => string;
