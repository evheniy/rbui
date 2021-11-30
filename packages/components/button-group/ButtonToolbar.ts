import mapProps from '@rbui/core/hoc/props';
import div from '@rbui/core/jsx/div';

import mapButtonToolbarProps from './props/buttonToolbar';

const withButtonToolbar = mapProps(mapButtonToolbarProps);

/**
 * @name Button Toolbar
 * @link https://getbootstrap.com/docs/5.1/components/button-group/#button-toolbar
 *
 * @description Combine sets of button groups into button toolbars for more complex components.
 */
const ButtonToolbar = withButtonToolbar(div);
ButtonToolbar.displayName = 'ButtonToolbar';

export default ButtonToolbar;
