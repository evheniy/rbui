import mapProps from '@rbui/core/hoc/props';
import ul from '@rbui/core/jsx/unorderedList';

import mapListGroupProps from './props/listGroup';

const withListGroup = mapProps(mapListGroupProps);

/**
 * @name List Group
 * @link https://getbootstrap.com/docs/5.1/components/list-group/
 *
 * @param {boolean} flush - Remove some borders and rounded corners to render list group items edge-to-edge in a parent container.
 * @param {boolean} horizontal - Changes the layout of list group items from vertical to horizontal across all breakpoints.
 *
 * @description Currently horizontal list groups cannot be combined with flush list groups.
 */
const ListGroup = withListGroup(ul);
ListGroup.displayName = 'ListGroup';

export default ListGroup;

export { default as Item } from './Item';
