/* eslint-disable @typescript-eslint/no-explicit-any */
export type MapProps<P, R = P> = (props: P) => R | P;

/**
 *  Compose MapProps
 * @param fns - (props: P): R => result
 * @returns fn
 */
const compose = <P extends object, R extends object = P>(...fns: Array<MapProps<any, any>>): MapProps<P, R> => {
  if (!fns.length) {
    return (props: P) => props;
  }

  if (fns.length === 1) {
    return fns[0] as MapProps<P, R>;
  }

  return fns.reduce((a, b) => (props: any) => a(b(props))) as MapProps<P, R>;
};

export default compose;
