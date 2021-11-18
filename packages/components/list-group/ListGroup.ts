import mapProps from '@rbui/core/hoc/props';
import ul from '@rbui/core/jsx/unorderedList';

import mapListGroupProps from './props/listGroup';

const withListGroup = mapProps(mapListGroupProps);

const ListGroup = withListGroup(ul);
ListGroup.displayName = 'ListGroup';

export default ListGroup;

export { default as Item } from './Item';
