/* eslint-disable import/prefer-default-export */
import warning from 'warning';

/**
 * Throws a warning if there are more than one value
 * @param props Props
 */
export const oneOf = (props: { [key: string]: boolean | undefined }) => {
  const keys = Object.keys(props).filter(key => props[key]);

  warning(keys.length < 2, `The component should have only one property of [${keys.map(key => `"${key}"`).join(', ')}]!`);
};
