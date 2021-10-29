/* istanbul ignore file */

import { getEnv } from '@rbui/core/env';

const devtool = getEnv() === 'production' ? 'source-map' : 'inline-cheap-module-source-map';

export default devtool;
