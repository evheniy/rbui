/* eslint-disable import/prefer-default-export */
import warning from 'warning';

/**
 * Throws a warning if there are more than one value
 * @param props Props
 */
export const oneOf = <T extends object>(props: T) => {
  const keys = (Object.keys(props) as Array<keyof T>).filter(key => props[key]);

  warning(keys.length < 2, `The component should have only one property of [${keys.map(key => `"${key}"`).join(', ')}]!`);
};
