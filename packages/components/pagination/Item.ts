import mapProps from '@rbui/core/hoc/props';
import list from '@rbui/core/jsx/list';

import mapItemProps from './props/item';

const withItem = mapProps(mapItemProps);

/**
 * @name Pagination Item
 * @link https://getbootstrap.com/docs/5.1/components/pagination/
 *
 * @param {boolean} active - Sets Item as current page.
 * @param {boolean} disabled - Makes Item disabled.
 * @param {boolean} href - Uses for Link component.
 * @param {boolean} custom - Helps to use children as is without wrapping to Text or Link components.
 */
const Item = withItem(list);
Item.displayName = 'Item';

export default Item;

export { default as Link } from './Link';
export { default as Text } from './Text';
