import span from '@rbui/core/jsx/span';

import withSpinner from './hocs/spinner';

const Spinner = withSpinner(span);
Spinner.displayName = 'Spinner';

export default Spinner;
