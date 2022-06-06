import loop from '@rbui/api/loop';

import { Core, CreateCore, Handler } from './types';

export type { Core, Handler };

const createCore: CreateCore = () => ({
  handlers: [],
  errorHandlers: [],
  then(...handlers) {
    this.handlers.push(...handlers);
    return this;
  },
  catch(...errorHandlers) {
    this.errorHandlers.push(...errorHandlers);
    return this;
  },
  async resolve(...args) {
    try {
      await loop(this.handlers, ...args);
    } catch (error) {
      if (error && (error as Error).message) {
        if (!this.errorHandlers.length) {
          throw error;
        } else {
          await loop(this.errorHandlers, error, ...args);
        }
      }
    }
  },
});

export default createCore;
