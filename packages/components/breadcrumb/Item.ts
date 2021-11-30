import mapProps from '@rbui/core/hoc/props';

import mapItemProps from './props/item';
import List from './jsx/item';

const withItem = mapProps(mapItemProps);

/**
 * @name Breadcrumb's Item
 * @link https://getbootstrap.com/docs/5.1/components/breadcrumb/
 *
 * @param {boolean} active - Sets item active.
 */
const Item = withItem(List);
Item.displayName = 'Item';

export default Item;
