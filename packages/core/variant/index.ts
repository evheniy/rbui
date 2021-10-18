type V = { [key: string]: boolean | undefined };
type R = string | undefined;
export interface Variant {
  (variants?: V, defaultValue?: string): R;
}

const variant:Variant = (variants = {}, defaultValue) => {
  let activeVariant = defaultValue;

  Object.keys(variants).forEach(key => {
    if (!activeVariant && variants[key]) {
      activeVariant = key;
    }
  });

  return activeVariant;
};

export default variant;
