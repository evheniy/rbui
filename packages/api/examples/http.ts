import api, { http } from '@rbui/api';

const handler: http.HttpHandler = (req, res) => {
  res.statusCode = 200;
  res.end('/');
};

api<http.HttpInterface>(http.withHTTP()).request(handler).listen(7000);

// docker run -ti --rm alpine/bombardier -c 200 -d 10s -l http://host.docker.internal:7000/
