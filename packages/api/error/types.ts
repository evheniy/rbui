import { IncomingHttpHeaders, ServerResponse } from 'http';
import { Http2ServerResponse } from 'http2';

export interface Type {
  (headers: IncomingHttpHeaders): string;
}

export interface Mapper {
  (error: string): string;
}

export interface MapType {
  [key: string]: Mapper;
}

export interface Format {
  (type?: string, message?: string): string;
}

export interface Response {
  (
    code: number,
    req: { headers: IncomingHttpHeaders; url: string },
    res: ServerResponse | Http2ServerResponse
  ): void;
}

export interface RequestError {
  (
    req: { headers: IncomingHttpHeaders; url: string },
    res: ServerResponse | Http2ServerResponse
  ): void;
}

export interface ServerError {
  (
    error: Error,
    req: { headers: IncomingHttpHeaders; url: string },
    res: ServerResponse | Http2ServerResponse
  ): void;
}
