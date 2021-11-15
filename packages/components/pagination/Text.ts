import span from '@rbui/core/jsx/span';

import withText from './hocs/text';

const Text = withText(span);
Text.displayName = 'Text';

export default Text;
