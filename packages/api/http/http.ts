import http from 'http';

import createHttpCore from './core';

import {
  HttpErrorHandler,
  HttpHandler,
  HttpInterface,
  WithHTTP,
} from './types';

export type { HttpHandler, HttpErrorHandler, HttpInterface };

const withHTTP: WithHTTP = options => core => createHttpCore(core, http.createServer(options as http.ServerOptions)) as HttpInterface;

export default withHTTP;
