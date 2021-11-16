import mapProps from '@rbui/core/hoc/props';
import button from '@rbui/core/jsx/button';

import mapButtonProps from './props/button';

const withButton = mapProps(mapButtonProps);

const Button = withButton(button);
Button.displayName = 'Button';

export default Button;
