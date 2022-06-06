import { CreateHttpCore } from './types';

import listen from './listen';

const createHttpCore: CreateHttpCore = (core, server, isSecure = false) => ({
  then(...handlers) {
    core.then(...handlers);
    return this;
  },
  catch(...errorHandlers) {
    core.catch(...errorHandlers);
    return this;
  },
  async resolve(...args) {
    return core.resolve(...args);
  },
  request(...handlers) {
    this.then(...handlers);

    return this;
  },
  error(...errorHandlers) {
    this.catch(...errorHandlers);

    return this;
  },
  listen(...args) {
    return listen(server, this.resolve, isSecure).listen(...args as Parameters<(typeof server)['listen']>);
  },
});

export default createHttpCore;
