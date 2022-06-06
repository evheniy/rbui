/* eslint-disable no-new */
import { AddressInfo } from 'net';
import { networkInterfaces } from 'os';

import * as errors from '@rbui/api/error';

import { Listen } from './types';

const listen: Listen = (server, handler, isSecure) => {
  server.on('error', error => {
    console.error('server', error); // eslint-disable-line

    process.exit(1);
  });

  server.on('request', (request, response) => {
    new Promise(resolve => {
      request.on('error', (err: Error) => {
        console.error('Request error:', err); // eslint-disable-line
        if (!response.writableEnded) {
          errors.request(request, response);
        }
        resolve('Request error');
      });
      request.on('close', () => resolve('Request close'));
      response.on('error', (err: Error) => {
        console.error('Response error:'); // eslint-disable-line
        console.error(err); // eslint-disable-line
        resolve('Response error');
      });
      response.on('close', () => resolve('Response close'));

      if (!response.writableEnded) {
        handler(request, response).then(() => {
          if (!response.writableEnded && !response.writableFinished) {
            errors.user(request, response);
          }
          resolve('Done');
        }).catch(error => {
          if (error && !response.writableEnded && !response.writableFinished) {
            errors.server(error, request, response);
          }
          resolve('Done');
        });
      }
    });
  });

  server.on('listening', () => {
    const { port } = server.address() as AddressInfo;

    const ifaces = networkInterfaces();

    Object.keys(ifaces).forEach(dev => {
      ifaces[dev]?.forEach(details => {
        if (details.family === 'IPv4') {
          console.info(`${isSecure ? 'https' : 'http'}://${details.address}:${port}/`); // eslint-disable-line
        }
      });
    });
  });

  return server;
};

export default listen;
