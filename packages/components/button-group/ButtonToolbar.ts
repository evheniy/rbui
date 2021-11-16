import mapProps from '@rbui/core/hoc/props';
import div from '@rbui/core/jsx/div';

import mapButtonToolbarProps from './props/buttonToolbar';

const withButtonToolbar = mapProps(mapButtonToolbarProps);

const ButtonToolbar = withButtonToolbar(div);
ButtonToolbar.displayName = 'ButtonToolbar';

export default ButtonToolbar;
