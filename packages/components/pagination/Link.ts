import mapProps from '@rbui/core/hoc/props';
import link from '@rbui/core/jsx/link';

import mapLinkProps from './props/link';

const withLink = mapProps(mapLinkProps);

/**
 * @name Pagination Item Link
 * @link https://getbootstrap.com/docs/5.1/components/pagination/
 */
const Link = withLink(link);
Link.displayName = 'Link';

export default Link;
