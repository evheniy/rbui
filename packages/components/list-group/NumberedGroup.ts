import mapProps from '@rbui/core/hoc/props';
import ol from '@rbui/core/jsx/orderedList';

import mapNumberedGroupProps from './props/numberedGroup';

const withNumberedGroup = mapProps(mapNumberedGroupProps);

/**
 * @name Numbered Group
 * @link https://getbootstrap.com/docs/5.1/components/list-group/
 *
 * @param {boolean} flush - Remove some borders and rounded corners to render list group items edge-to-edge in a parent container.
 * @param {boolean} horizontal - Changes the layout of list group items from vertical to horizontal across all breakpoints.
 *
 * @description Currently horizontal list groups cannot be combined with flush list groups.
 */
const NumberedGroup = withNumberedGroup(ol);
NumberedGroup.displayName = 'NumberedGroup';

export default NumberedGroup;

export { default as Item } from './Item';
