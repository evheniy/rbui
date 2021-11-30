import mapProps from '@rbui/core/hoc/props';

import mapPaginationProps from './props/pagination';
import PaginationComponent from './jsx/pagination';

const withPagination = mapProps(mapPaginationProps);

/**
 * @name Pagination
 * @link https://getbootstrap.com/docs/5.1/components/pagination/
 *
 * @param {boolean} lg - Makes pagination larger.
 * @param {boolean} sm - Makes pagination smaller.
 */
const Pagination = withPagination(PaginationComponent);
Pagination.displayName = 'Pagination';

export default Pagination;

export { default as Item } from './Item';
