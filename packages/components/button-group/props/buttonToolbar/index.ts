import role from './role';
import aria from './aria';
import mapClassName from './className';

import { MapButtonToolbarProps as P } from '../../types';

const mapButtonToolbarProps: P = ({ className, ...props }) => ({
  role,
  ...aria,
  className: mapClassName({ className }),
  ...props,
});

export default mapButtonToolbarProps;
