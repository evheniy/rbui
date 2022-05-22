import P from '@rbui/core/jsx/p';
import { ComponentPropsWithRef, FC } from 'react';

import withTextProps from './hoc';
import { TextProps } from './types';

const Text = withTextProps(P) as FC<ComponentPropsWithRef<'p'> & TextProps>;
Text.displayName = 'Text';

/**
 *
 */
export default Text;
