import response from './response';

import { RequestError } from './types';

const request: RequestError = (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(req.url, req.headers); // eslint-disable-line
  }

  response(400, req, res);
};

export default request;
