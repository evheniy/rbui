import type from './type';
import aria from './aria';
import mapClassName from './className';

import { MapCloseButtonProps as P } from '../types';

const mapCloseButtonProps: P = ({ white, className, ...props }) => ({
  ...type,
  ...aria,
  className: mapClassName({ white, className }),
  ...props,
});

export default mapCloseButtonProps;
