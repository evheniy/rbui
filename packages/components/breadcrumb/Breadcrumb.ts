import mapProps from '@rbui/core/hoc/props';

import mapBreadcrumbProps from './props/breadcrumb';
import Nav from './jsx/breadcrumb';

const withBreadcrumb = mapProps(mapBreadcrumbProps);

/**
 * @name Breadcrumb
 * @link https://getbootstrap.com/docs/5.1/components/breadcrumb/
 *
 * @param {string} divider - Sets divider between links.
 */
const Breadcrumb = withBreadcrumb(Nav);
Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;

export { default as Item } from './Item';
