import mapClassName from './className';

import { MapLinkProps as P } from '../../types';

const mapLinkProps: P = ({ className, ...props }) => ({
  className: mapClassName({ className }),
  ...props,
});

export default mapLinkProps;
