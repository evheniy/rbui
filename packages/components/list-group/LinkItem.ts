import mapProps from '@rbui/core/hoc/props';
import a from '@rbui/core/jsx/link';

import mapLinkItemProps from './props/linkItem';

const withLinkItem = mapProps(mapLinkItemProps);

const LinkItem = withLinkItem(a);
LinkItem.displayName = 'LinkItem';

export default LinkItem;
