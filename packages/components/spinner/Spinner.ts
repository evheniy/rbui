import mapProps from '@rbui/core/hoc/props';
import span from '@rbui/core/jsx/span';

import mapSpinnerProps from './props/spinner';

const withSpinner = mapProps(mapSpinnerProps);

const Spinner = withSpinner(span);
Spinner.displayName = 'Spinner';

export default Spinner;
