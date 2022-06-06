import { STATUS_CODES } from 'http';

import getType from './type';
import format from './format';

import { Response } from './types';

const response: Response = (code, req, res) => {
  const message = STATUS_CODES[code];
  const type = getType(req.headers);

  res.statusCode = code;
  res.setHeader('Content-Type', `${type}; charset=utf-8`);
  res.end(format(type, message));
};

export default response;
