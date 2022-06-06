import { createCertificate } from 'pem';
import api, { http } from '@rbui/api';

createCertificate({ days: 1, selfSigned: true }, (err, keys) => {
  if (err) {
    throw err;
  }
  api<http.Http2SecureInterface>(http.withHTTP2S({ key: keys.serviceKey, cert: keys.certificate }))
    .request((req, res) => {
      res.statusCode = 200;
      res.end('/');
    })
    .listen(7000);
});
