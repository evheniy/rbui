import mapProps from '@rbui/core/hoc/props';

import mapBreadcrumbProps from './props/breadcrumb';
import Nav from './jsx/breadcrumb';

const withBreadcrumb = mapProps(mapBreadcrumbProps);

const Breadcrumb = withBreadcrumb(Nav);
Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;

export { default as Item } from './Item';
