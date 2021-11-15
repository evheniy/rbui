import div from '@rbui/core/jsx/div';

import withBar from './hocs/bar';

const Bar = withBar(div);
Bar.displayName = 'Bar';

export default Bar;
