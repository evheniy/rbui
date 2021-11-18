import mapProps from '@rbui/core/hoc/props';
import li from '@rbui/core/jsx/list';

import mapItemProps from './props/item';

const withItem = mapProps(mapItemProps);

const Item = withItem(li);
Item.displayName = 'Item';

export default Item;
