import mapProps from '@rbui/core/hoc/props';
import div from '@rbui/core/jsx/div';

import mapProgressProps from './props/progress';

const withProgress = mapProps(mapProgressProps);

/**
 * @name Progress
 * @link https://getbootstrap.com/docs/5.1/components/progress/
 *
 * @param {boolean} min - Min value.
 * @param {boolean} max - Max value.
 * @param {boolean} now - Current value.
 *
 * @param {boolean} label - Add labels to your progress bars.
 *
 * @param {boolean} striped - Apply a stripe gradient.
 * @param {boolean} animated - The striped gradient can also be animated.
 *
 * @param {boolean} success - Sets background color to Success.
 * @param {boolean} info - Sets background color to Info.
 * @param {boolean} warning - Sets background color to Warning.
 * @param {boolean} danger - Sets background color to Danger.
 */
const Progress = withProgress(div);
Progress.displayName = 'Progress';

export default Progress;

export { default as Bar } from './Bar';
