import button from '@rbui/core/jsx/button';

import withButton from './hocs/button';

const Button = withButton(button);
Button.displayName = 'Button';

export default Button;
