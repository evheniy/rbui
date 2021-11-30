import mapProps from '@rbui/core/hoc/props';
import li from '@rbui/core/jsx/list';

import mapItemProps from './props/item';

const withItem = mapProps(mapItemProps);

/**
 * @name List Group Item
 * @link https://getbootstrap.com/docs/5.1/components/list-group/
 *
 * @param {boolean} active - Makes Item active.
 * @param {boolean} disabled - Makes Item disabled.
 *
 * @param {boolean} primary - Sets Item background to Primary.
 * @param {boolean} secondary - Sets Item background to Secondary.
 * @param {boolean} success - Sets Item background to Success.
 * @param {boolean} danger - Sets Item background to Danger.
 * @param {boolean} warning - Sets Item background to Warning.
 * @param {boolean} info - Sets Item background to Info.
 * @param {boolean} light - Sets Item background to Light.
 * @param {boolean} dark - Sets Item background to Dark.
 */
const Item = withItem(li);
Item.displayName = 'Item';

export default Item;
