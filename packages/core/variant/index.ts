export interface Variant {
  (variants: { [key: string]: boolean | undefined }): string | undefined;
}

const variant:Variant = variants => {
  let activeVariant: string | undefined;

  Object.keys(variants).forEach(key => {
    if (!activeVariant && variants[key]) {
      activeVariant = key;
    }
  });

  return activeVariant;
};

export default variant;
