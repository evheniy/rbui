import http2 from 'http2';

import createHttpCore from './core';

import {
  Http2ErrorHandler,
  Http2Handler,
  Http2Interface,
  WithHTTP2,
} from './types';

export type { Http2Handler, Http2ErrorHandler, Http2Interface };

const withHTTP2: WithHTTP2 = options => core => createHttpCore(core, http2.createServer(options as http2.ServerOptions)) as Http2Interface;

export default withHTTP2;
