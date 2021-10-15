import { FC } from 'react';

export interface P {
  [key: string]: any; // eslint-disable-line
}

export type FCP = FC<P>;

export interface HOC {
  (Component: FCP, options?: P): FCP;
}

export type { FC } from 'react';
