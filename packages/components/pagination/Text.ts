import mapProps from '@rbui/core/hoc/props';
import span from '@rbui/core/jsx/span';

import mapTextProps from './props/text';

const withText = mapProps(mapTextProps);

/**
 * @name Pagination Item Text
 * @link https://getbootstrap.com/docs/5.1/components/pagination/
 */
const Text = withText(span);
Text.displayName = 'Text';

export default Text;
