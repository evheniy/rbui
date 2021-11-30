import mapProps from '@rbui/core/hoc/props';
import span from '@rbui/core/jsx/span';

import mapBadgeProps from './props/badge';

const withBadge = mapProps(mapBadgeProps);

/**
 * @name Badge
 * @link https://getbootstrap.com/docs/5.1/components/badge/
 *
 * @param {boolean} primary - Sets background color to Primary.
 * @param {boolean} secondary - Sets background color to Secondary.
 * @param {boolean} success - Sets background color to Success.
 * @param {boolean} danger - Sets background color to Danger.
 * @param {boolean} warning - Sets background color to Warning.
 * @param {boolean} info - Sets background color to Info.
 * @param {boolean} light - Sets background color to Light.
 * @param {boolean} dark - Sets background color to Dark.
 *
 * @param {boolean} pill - Makes the badge more rounded with a larger border-radius.
 * @param {boolean} circle - Makes the badge a more generic indicator.
 *
 * @description Use only one background color and don't mix pill and circle,
 */
const Badge = withBadge(span);
Badge.displayName = 'Badge';

export default Badge;
