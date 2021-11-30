import mapProps from '@rbui/core/hoc/props';
import span from '@rbui/core/jsx/span';

import mapSpinnerProps from './props/spinner';

const withSpinner = mapProps(mapSpinnerProps);

/**
 * @name Spinner
 * @link https://getbootstrap.com/docs/5.1/components/spinners/
 *
 * @param {boolean} grow - Makes growing spinner.
 *
 * @param {boolean} primary - Sets spinner color to Primary.
 * @param {boolean} secondary - Sets spinner color to Secondary.
 * @param {boolean} success - Sets spinner color to Success.
 * @param {boolean} danger - Sets spinner color to Danger.
 * @param {boolean} warning - Sets spinner color to Warning.
 * @param {boolean} info - Sets spinner color to Info.
 * @param {boolean} light - Sets spinner color to Light.
 * @param {boolean} dark - Sets spinner color to Dark.
 *
 * @param {boolean} sm - Makes spinner smaller.
 */
const Spinner = withSpinner(span);
Spinner.displayName = 'Spinner';

export default Spinner;
