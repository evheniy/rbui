import div from '@rbui/core/jsx/div';

import withProgress from './hocs/progress';

const Progress = withProgress(div);
Progress.displayName = 'Progress';

export default Progress;

export { default as Bar } from './Bar';
