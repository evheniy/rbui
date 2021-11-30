import mapProps from '@rbui/core/hoc/props';
import div from '@rbui/core/jsx/div';

import mapActiveGroupProps from './props/activeGroup';

const withActiveGroup = mapProps(mapActiveGroupProps);

/**
 * @name Active Group
 * @link https://getbootstrap.com/docs/5.1/components/list-group/
 *
 * @param {boolean} flush - Remove some borders and rounded corners to render list group items edge-to-edge in a parent container.
 * @param {boolean} horizontal - Changes the layout of list group items from vertical to horizontal across all breakpoints.
 *
 * @description Currently horizontal list groups cannot be combined with flush list groups.
 */
const ActiveGroup = withActiveGroup(div);
ActiveGroup.displayName = 'ActiveGroup';

export default ActiveGroup;

export { default as LinkItem } from './LinkItem';
export { default as ButtonItem } from './ButtonItem';
