import mapProps from '@rbui/core/hoc/props';
import list from '@rbui/core/jsx/list';

import mapItemProps from './props/item';

const withItem = mapProps(mapItemProps);

const Item = withItem(list);
Item.displayName = 'Item';

export default Item;

export { default as Link } from './Link';
export { default as Text } from './Text';
