import mapProps from '@rbui/core/hoc/props';
import link from '@rbui/core/jsx/link';

import mapLinkProps from './props/link';

const withLink = mapProps(mapLinkProps);

/**
 * @name Button Link
 * @link https://getbootstrap.com/docs/5.1/components/buttons/
 *
 * @param {boolean} primary - Sets button style to Primary.
 * @param {boolean} secondary - Sets button style to Secondary.
 * @param {boolean} success - Sets button style to Success.
 * @param {boolean} danger - Sets button style to Danger.
 * @param {boolean} warning - Sets button style to Warning.
 * @param {boolean} info - Sets button style to Info.
 * @param {boolean} light - Sets button style to Light.
 * @param {boolean} dark - Sets button style to Dark.
 *
 * @param {boolean} link - Sets button style to Link.
 * @param {boolean} outline - Deletes button's background.
 *
 * @param {boolean} lg - Makes button larger.
 * @param {boolean} sm - Makes button smaller.
 *
 * @param {boolean} nowrap - Disables text wrapping.
 *
 * @param {boolean} toggle - Adds toggling to button.
 * @param {boolean} active - Makes toggled button active by default.
 */
const Link = withLink(link);
Link.displayName = 'Link';

export default Link;
