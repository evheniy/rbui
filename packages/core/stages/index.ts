/* eslint-disable @typescript-eslint/no-inferrable-types */
import { getStage as getEnvStage } from '@rbui/core/env';

/**
 * Develop
 */
export const DEV: string = 'dev';
/**
 * Staging
 */
export const STAGING: string = 'staging';

/**
 * Testing
 */
export const TEST: string = 'test';

/**
 * Production
 */
export const PRODUCTION: string = 'production';

/**
 * Get stage
 * @returns {!string} Stage
 */
export const getStage = (): never | string => {
  const stage = getEnvStage() || DEV;

  if (![DEV, STAGING, TEST, PRODUCTION].includes(stage)) {
    throw new Error('Wrong stage!');
  }

  return stage;
};

/**
 * Is develop
 * @returns {boolean} Is develop
 */
export const isDev = () => getStage() === DEV;

/**
 * Is staging
 * @returns {boolean} Is staging
 */
export const isStaging = () => getStage() === STAGING;

/**
 * Is test
 * @returns {boolean} Is test
 */
export const isTest = () => getStage() === TEST;

/**
 * Is production
 * @returns {boolean} Is production
 */
export const isProduction = () => getStage() === PRODUCTION;
