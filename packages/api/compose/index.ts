import { Compose, Mapper } from './types';

export type { Compose, Mapper };

const compose: Compose = (...fns) => {
  if (!fns.length) {
    return (...args) => (args.length === 1 ? args[0] : args);
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((a, b) => (...args) => a(b(...args)));
};

export default compose;
