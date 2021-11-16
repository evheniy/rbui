import mapProps from '@rbui/core/hoc/props';
import link from '@rbui/core/jsx/link';

import mapLinkProps from './props/link';

const withLink = mapProps(mapLinkProps);

const Link = withLink(link);
Link.displayName = 'Link';

export default Link;
