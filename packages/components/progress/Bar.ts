import mapProps from '@rbui/core/hoc/props';
import div from '@rbui/core/jsx/div';

import mapBarProps from './props/bar';

const withBar = mapProps(mapBarProps);

const Bar = withBar(div);
Bar.displayName = 'Bar';

export default Bar;
