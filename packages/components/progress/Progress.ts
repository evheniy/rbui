import mapProps from '@rbui/core/hoc/props';
import div from '@rbui/core/jsx/div';

import mapProgressProps from './props/progress';

const withProgress = mapProps(mapProgressProps);

const Progress = withProgress(div);
Progress.displayName = 'Progress';

export default Progress;

export { default as Bar } from './Bar';
