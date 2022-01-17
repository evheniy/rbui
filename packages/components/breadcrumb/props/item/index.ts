import mapAria from './aria';
import mapClassName from './className';

import { MapItemProps as P } from '../../types';

const mapItemProps: P = ({ className, active = false, ...props }) => ({
  ...mapAria({ active }),
  className: mapClassName({ active, className }),
  ...props,
  href: props.href || undefined,
});

export default mapItemProps;
