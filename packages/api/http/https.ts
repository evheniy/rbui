import https from 'https';

import createHttpCore from './core';

import {
  HttpErrorHandler,
  HttpHandler,
  HttpInterface,
  WithHTTPS,
} from './types';

export type { HttpHandler, HttpErrorHandler, HttpInterface };

const withHTTPS: WithHTTPS = options => core => createHttpCore(core, https.createServer(options as https.ServerOptions), true) as HttpInterface;

export default withHTTPS;
