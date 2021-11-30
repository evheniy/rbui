import mapProps from '@rbui/core/hoc/props';
import a from '@rbui/core/jsx/link';

import mapLinkItemProps from './props/linkItem';

const withLinkItem = mapProps(mapLinkItemProps);

/**
 * @name Active Group LinkItem
 * @link https://getbootstrap.com/docs/5.1/components/list-group/
 *
 * @param {boolean} active - Makes Item active.
 * @param {boolean} disabled - Makes Item disabled.
 *
 * @param {boolean} primary - Sets LinkItem background to Primary.
 * @param {boolean} secondary - Sets LinkItem background to Secondary.
 * @param {boolean} success - Sets LinkItem background to Success.
 * @param {boolean} danger - Sets LinkItem background to Danger.
 * @param {boolean} warning - Sets LinkItem background to Warning.
 * @param {boolean} info - Sets LinkItem background to Info.
 * @param {boolean} light - Sets LinkItem background to Light.
 * @param {boolean} dark - Sets LinkItem background to Dark.
 */
const LinkItem = withLinkItem(a);
LinkItem.displayName = 'LinkItem';

export default LinkItem;
