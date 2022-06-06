import response from './response';

import { ServerError } from './types';

const server: ServerError = (error, req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(req.url, req.headers, error); // eslint-disable-line
  }

  response(500, req, res);
};

export default server;
