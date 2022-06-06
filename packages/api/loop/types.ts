export interface Run {
  (index?: number): Promise<void | never>;
}

export interface Loop {
  <A = unknown>(handlers: Array<(...args: A[]) => Promise<void | never>>, ...args: A[]): Promise<void | never>;
}
