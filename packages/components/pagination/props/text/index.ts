import mapClassName from '../link/className';

import { MapTextProps as P } from '../../types';

const mapTextProps: P = ({ className, ...props }) => ({
  className: mapClassName({ className }),
  ...props,
});

export default mapTextProps;
