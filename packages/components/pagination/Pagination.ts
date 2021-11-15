import withPagination from './hocs/pagination';
import PaginationComponent from './jsx/pagination';

const Pagination = withPagination(PaginationComponent);
Pagination.displayName = 'Pagination';

export default Pagination;

export { default as Item } from './Item';
