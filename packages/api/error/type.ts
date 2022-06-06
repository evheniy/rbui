import headers from './headers';

import { Type } from './types';

const type: Type = requestHeaders => {
  if (requestHeaders['content-type']) {
    return requestHeaders['content-type'];
  }

  if (requestHeaders.accept?.includes(headers.html)) {
    return headers.html;
  }

  if (requestHeaders.accept?.includes(headers.json)) {
    return headers.json;
  }

  if (requestHeaders.accept?.includes(headers.xml)) {
    return headers.xml;
  }

  return headers.text;
};

export default type;
