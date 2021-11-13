import { Variant } from './types';

const variant:Variant = (variants = {}, defaultValue) => {
  let activeVariant = defaultValue;

  Object.keys(variants).forEach(key => {
    if (variants[key]) {
      activeVariant = key;
    }
  });

  return activeVariant;
};

export default variant;
