import { ComponentPropsWithRef } from 'react';

import { ClassName, White } from '@rbui/core/props/types';

export type CloseButtonProps = White & ComponentPropsWithRef<'button'>;

export type MapCloseButtonProps = (props: CloseButtonProps) => ComponentPropsWithRef<'button'>;

export type MapClassName = (props: White & ClassName) => string;
