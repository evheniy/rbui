import mapProps from '@rbui/core/hoc/props';

import mapItemProps from './props/item';
import List from './jsx/item';

const withItem = mapProps(mapItemProps);

const Item = withItem(List);
Item.displayName = 'Item';

export default Item;
