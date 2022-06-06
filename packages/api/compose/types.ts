/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Mapper<A extends any[] = any[], R = any> {
  (...args: A): R;
}

export interface Compose {
  <A extends any[] = any[], R = any>(...fns: Mapper[]): Mapper<A, R>;
}
