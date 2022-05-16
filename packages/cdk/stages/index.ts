import { getStage } from '@rbui/cdk/env';

export const DEV = 'dev';
export const STAGING = 'staging';
export const TEST = 'test';
export const PRODUCTION = 'production';

export const isDev = () => getStage() === DEV;
export const isStaging = () => getStage() === STAGING;
export const isTest = () => getStage() === TEST;
export const isProduction = () => getStage() === PRODUCTION;

export default () => {
  const stage = getStage() || DEV;

  if (![DEV, STAGING, TEST, PRODUCTION].includes(stage)) {
    throw new Error('Wrong stage!');
  }

  return stage;
};
