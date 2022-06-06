import { createCertificate } from 'pem';
import api, { http } from '@rbui/api';

const handler: http.HttpHandler = async (req, res) => {
  res.statusCode = 200;
  res.end('/');
};

createCertificate({ days: 1, selfSigned: true }, (err, keys) => {
  if (err) {
    throw err;
  }
  api<http.HttpInterface>(http.withHTTPS({ key: keys.serviceKey, cert: keys.certificate }))
    .request(handler)
    .listen(7000);
});
