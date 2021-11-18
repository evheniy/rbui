import mapProps from '@rbui/core/hoc/props';
import ol from '@rbui/core/jsx/orderedList';

import mapNumberedGroupProps from './props/numberedGroup';

const withNumberedGroup = mapProps(mapNumberedGroupProps);

const NumberedGroup = withNumberedGroup(ol);
NumberedGroup.displayName = 'NumberedGroup';

export default NumberedGroup;

export { default as Item } from './Item';
