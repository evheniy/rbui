import mapProps from '@rbui/core/hoc/props';
import span from '@rbui/core/jsx/span';

import mapBadgeProps from './props/badge';

const withBadge = mapProps(mapBadgeProps);

/**
 * @name Badge
 * @link https://getbootstrap.com/docs/5.1/components/badge/
 *
 * @param {boolean} primary - Sets Background color to Primary (.bg-primary).
 * @param {boolean} secondary - Sets Background color to Secondary (.bg-secondary).
 * @param {boolean} success - Sets Background color to Success (.bg-success).
 * @param {boolean} danger - Sets Background color to Danger (.bg-danger).
 * @param {boolean} warning - Sets Background color to Warning (.bg-warning).
 * @param {boolean} info - Sets Background color to Info (.bg-info).
 * @param {boolean} light - Sets Background color to Light (.bg-light).
 * @param {boolean} dark - Sets Background color to Dark (.bg-dark).
 * @param {boolean} pill - Makes the badge more rounded with a larger border-radius. (.rounded-pill).
 * @param {boolean} circle - Makes the badge a more generic indicator. (.rounded-circle).
 *
 * @description Use only one background color and don't mix pill and circle,
 */
const Badge = withBadge(span);
Badge.displayName = 'Badge';

export default Badge;
