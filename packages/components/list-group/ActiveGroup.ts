import mapProps from '@rbui/core/hoc/props';
import div from '@rbui/core/jsx/div';

import mapActiveGroupProps from './props/activeGroup';

const withActiveGroup = mapProps(mapActiveGroupProps);

const ActiveGroup = withActiveGroup(div);
ActiveGroup.displayName = 'ActiveGroup';

export default ActiveGroup;

export { default as LinkItem } from './LinkItem';
export { default as ButtonItem } from './ButtonItem';
