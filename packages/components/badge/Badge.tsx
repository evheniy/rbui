import { FC } from 'react';

import { BadgeProps } from './types';

import withBadge from './hocs/badge';

const Badge:FC<BadgeProps> = withBadge('span');
Badge.displayName = 'Badge';

export default Badge;
