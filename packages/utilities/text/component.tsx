import { FC, ComponentPropsWithRef } from 'react';

import P from '@rbui/core/jsx/p';

import { TextProps } from './types';

import withTextProps from './hoc';

const Text = withTextProps(P) as FC<ComponentPropsWithRef<'p'> & TextProps>;
Text.displayName = 'Text';

/**
 *
 */
export default Text;
