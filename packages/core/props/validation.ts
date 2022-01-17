import warning from 'warning';

/**
 * Throws a warning if there are more than one value
 * @param {object} props Props
 */
export const oneOf = <P extends object>(props: P) => {
  const keys = (Object.keys(props) as Array<keyof P>).filter(key => props[key]);

  warning(keys.length < 2, `The component should have only one property of [${keys.map(key => `"${key}"`).join(', ')}]!`);
};

/**
 * Throws a warning if props has filed from fields without field from requiredField
 * @param {object} props
 * @param {string[]} fields
 * @param {string[]} requiredField
 */
export const requires = <P extends object>(props: P, fields: string[], requiredField: string[]) => {
  const keys = (Object.keys(props) as Array<keyof P>).filter(key => props[key]) as string[];

  const hasFields = keys.some(key => fields.indexOf(key) >= 0);
  const hasRequires = keys.some(key => requiredField.indexOf(key) >= 0);

  warning(hasFields && !hasRequires, `The component should have property of [${requiredField.map(key => `"${key}"`).join(', ')}]!`);
};
