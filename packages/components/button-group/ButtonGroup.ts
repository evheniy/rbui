import mapProps from '@rbui/core/hoc/props';
import div from '@rbui/core/jsx/div';

import mapButtonGroupProps from './props/buttonGroup';

const withButtonGroup = mapProps(mapButtonGroupProps);

const ButtonGroup = withButtonGroup(div);
ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
