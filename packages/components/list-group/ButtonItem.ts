import mapProps from '@rbui/core/hoc/props';
import button from '@rbui/core/jsx/button';

import mapButtonItemProps from './props/buttonItem';

const withButtonItem = mapProps(mapButtonItemProps);

const ButtonItem = withButtonItem(button);
ButtonItem.displayName = 'ButtonItem';

export default ButtonItem;
