import mapProps from '@rbui/core/hoc/props';

import mapPaginationProps from './props/pagination';
import PaginationComponent from './jsx/pagination';

const withPagination = mapProps(mapPaginationProps);

const Pagination = withPagination(PaginationComponent);
Pagination.displayName = 'Pagination';

export default Pagination;

export { default as Item } from './Item';
