import { realpathSync } from 'fs';
import { resolve } from 'path';

const appDirectory = realpathSync(process.cwd());

/**
 * Creates path in the project directory
 */
export const getFullPath = (...pathSegments: string[]) => resolve(appDirectory, ...pathSegments);
