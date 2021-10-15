import { FCP, HOC } from '@rb/core/types';

export default function compose(...funcs: HOC[]): HOC {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (Component: FCP) => a(b(Component)));
}
