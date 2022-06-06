import { Readable, Writable } from 'stream';
import { Server } from 'net';
import {
  Server as HttpServer,
  IncomingMessage,
  ServerOptions,
  ServerResponse,
} from 'http';
import { ServerOptions as HttpsServerOptions } from 'https';
import {
  Http2SecureServer,
  Http2Server,
  ServerOptions as Http2ServerOptions,
  Http2ServerRequest,
  Http2ServerResponse,
  SecureServerOptions,
} from 'http2';

import { Core, Handler } from '@rbui/api/core/types';

export type Result = Promise<void | never> | void | never;

export interface HttpCore extends Core {
  request: <H extends Handler>(...handlers: Array<H>) => this;
  error: <E extends Handler>(...handlers: Array<E>) => this;
  listen: Server['listen'];
}

export interface CreateHttpCore<H extends HttpCore = HttpCore, S extends Server = Server> {
  (core: Core, server: S, isSecure?: boolean): H;
}

export interface Listen {
  (server: Server, handler: Handler<[Readable, Writable], Promise<void | never>>, isSecure?: boolean): Server;
}

export type HttpHandler = Handler<[IncomingMessage, ServerResponse], Result>;
export type HttpErrorHandler = Handler<[Error, IncomingMessage, ServerResponse], Result>;

export interface HttpInterface extends HttpCore {
  request: (...handlers: Array<HttpHandler>) => this;
  error: (...handlers: Array<HttpErrorHandler>) => this;
  listen: HttpServer['listen'];
}

export type Http2Handler = Handler<[Http2ServerRequest, Http2ServerResponse], Result>;
export type Http2ErrorHandler = Handler<[Error, Http2ServerRequest, Http2ServerResponse], Result>;

export interface Http2Interface extends HttpCore {
  request: (...handlers: Array<Http2Handler>) => this;
  error: (...handlers: Array<Http2ErrorHandler>) => this;
  listen: Http2Server['listen'];
}

export interface Http2SecureInterface extends HttpCore {
  request: (...handlers: Array<Http2Handler>) => this;
  error: (...handlers: Array<Http2ErrorHandler>) => this;
  listen: Http2SecureServer['listen'];
}

export interface WithHTTP {
  (options?: ServerOptions): (core: Core) => HttpInterface;
}

export interface WithHTTPS {
  (options: HttpsServerOptions): (core: Core) => HttpInterface;
}

export interface WithHTTP2 {
  (options?: Http2ServerOptions): (core: Core) => Http2Interface;
}

export interface WithHTTP2S {
  (options: SecureServerOptions): (core: Core) => Http2SecureInterface;
}
