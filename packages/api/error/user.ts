import response from './response';

import { RequestError } from './types';

const user: RequestError = (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(req.url, req.headers); // eslint-disable-line
  }

  response(404, req, res);
};

export default user;
