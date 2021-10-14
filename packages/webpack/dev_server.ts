/* istanbul ignore file */

import { Configuration } from 'webpack-dev-server';

const devServer: Configuration = {
  port: 8000,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
};

export default devServer;
