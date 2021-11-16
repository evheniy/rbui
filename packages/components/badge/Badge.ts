import mapProps from '@rbui/core/hoc/props';
import span from '@rbui/core/jsx/span';

import mapBadgeProps from './props/badge';

const withBadge = mapProps(mapBadgeProps);

const Badge = withBadge(span);
Badge.displayName = 'Badge';

export default Badge;
