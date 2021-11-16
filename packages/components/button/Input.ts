import mapProps from '@rbui/core/hoc/props';
import input from '@rbui/core/jsx/input';

import mapInputProps from './props/input';

const withInput = mapProps(mapInputProps);

const Input = withInput(input);
Input.displayName = 'Input';

export default Input;
