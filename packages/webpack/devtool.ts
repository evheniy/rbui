/* istanbul ignore file */

import { getEnv } from '@rb/env';

const devtool = getEnv() === 'production' ? 'source-map' : 'inline-cheap-module-source-map';

export default devtool;
