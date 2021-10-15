import { Variant as V } from '../types';

const variant:V = variants => {
  let activeVariant: string | undefined;

  Object.keys(variants).forEach(key => {
    if (!activeVariant && variants[key]) {
      activeVariant = key;
    }
  });

  return activeVariant;
};

export default variant;
