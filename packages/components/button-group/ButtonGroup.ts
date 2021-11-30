import mapProps from '@rbui/core/hoc/props';
import div from '@rbui/core/jsx/div';

import mapButtonGroupProps from './props/buttonGroup';

const withButtonGroup = mapProps(mapButtonGroupProps);

/**
 * @name Button Group
 * @link https://getbootstrap.com/docs/5.1/components/button-group/
 *
 * @param {boolean} lg - Makes buttons in the group larger.
 * @param {boolean} sm - Makes buttons in the group smaller.
 *
 * @param {boolean} vertical - Make a set of buttons appear vertically stacked rather than horizontally.
 */
const ButtonGroup = withButtonGroup(div);
ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
