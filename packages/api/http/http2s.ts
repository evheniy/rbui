import http2 from 'http2';

import createHttpCore from './core';

import {
  Http2ErrorHandler,
  Http2Handler,
  Http2SecureInterface,
  WithHTTP2S,
} from './types';

export type { Http2Handler, Http2ErrorHandler, Http2SecureInterface };

const withHTTP2S: WithHTTP2S = options => core => createHttpCore(
  core,
  http2.createSecureServer(options as http2.SecureServerOptions),
  true,
) as Http2SecureInterface;

export default withHTTP2S;
