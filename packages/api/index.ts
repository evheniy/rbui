import createCore, { Core } from '@rbui/api/core';
import compose, { Mapper } from '@rbui/api/compose';
import loop from '@rbui/api/loop';

import * as http from '@rbui/api/http';

const api = <R extends Core = Core>(...fns: Mapper[]) => compose<[Core], R>(...fns)(createCore());

export default api;

export {
  createCore,
  compose,
  loop,
  http,
};
