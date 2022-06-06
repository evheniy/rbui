/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Handler<A extends any[] = any[], R = any> {
  (...args: A): R;
}

export interface Handlers {
  handlers: Handler[];
  errorHandlers: Handler[];
}

export interface Core {
  then: <A extends any[] = any[], R = any>(...handlers: Array<Handler<A, R>>) => Core;
  catch: <A extends any[] = any[], R = any>(...errorHandlers: Array<Handler<A, R>>) => Core;
  resolve: <A extends any[] = any[]>(...args: A) => Promise<void | never>;
}

export interface CreateCore {
  (): Core & Handlers;
}
