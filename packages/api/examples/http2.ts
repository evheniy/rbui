import api, { http } from '@rbui/api';

const handler: http.Http2Handler = async (req, res) => {
  res.statusCode = 200;
  res.end('/');
};

api<http.Http2Interface>(http.withHTTP2())
  .request(handler)
  .listen(7000);
