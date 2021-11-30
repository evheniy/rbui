import mapProps from '@rbui/core/hoc/props';
import button from '@rbui/core/jsx/button';

import mapButtonItemProps from './props/buttonItem';

const withButtonItem = mapProps(mapButtonItemProps);

/**
 * @name Active Group ButtonItem
 * @link https://getbootstrap.com/docs/5.1/components/list-group/
 *
 * @param {boolean} active - Makes Item active.
 * @param {boolean} disabled - Makes Item disabled.
 *
 * @param {boolean} primary - Sets ButtonItem background to Primary.
 * @param {boolean} secondary - Sets ButtonItem background to Secondary.
 * @param {boolean} success - Sets ButtonItem background to Success.
 * @param {boolean} danger - Sets ButtonItem background to Danger.
 * @param {boolean} warning - Sets ButtonItem background to Warning.
 * @param {boolean} info - Sets ButtonItem background to Info.
 * @param {boolean} light - Sets ButtonItem background to Light.
 * @param {boolean} dark - Sets ButtonItem background to Dark.
 */
const ButtonItem = withButtonItem(button);
ButtonItem.displayName = 'ButtonItem';

export default ButtonItem;
