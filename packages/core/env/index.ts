/**
 * Get env
 * @returns {?string} Stage
 */
export const getEnv = () => process.env.NODE_ENV;

/**
 * Get stage
 * @returns {?string} Stage
 */
export const getStage = () => process.env.STAGE;

/**
 * Get region
 * @returns {?string} Region
 */
export const getRegion = () => process.env.REGION;

/**
 * Get CDK Account
 * @returns {?string} CDK Account
 */
export const getCdkAccount = () => process.env.CDK_DEFAULT_ACCOUNT;

/**
 * Get CDK Region
 * @returns {?string} CDK Region
 */
export const getCdkRegion = () => process.env.CDK_DEFAULT_REGION;
