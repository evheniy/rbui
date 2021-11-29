import { oneOf } from '@rbui/core/props/validation';

import mapAria from './aria';
import mapClassName from './className';
import mapChildren from './children';

import { MapItemProps as P } from '../../types';

const mapItemProps: P = props => {
  const {
    active,
    disabled,
    href,
    custom,
    className,
    children,
    ...rest
  } = props;

  oneOf({ active, disabled });

  return {
    ...mapAria({ active }),
    className: mapClassName({ className, active, disabled }),
    children: mapChildren({
      active,
      disabled,
      href,
      children,
      custom,
    }),
    ...rest,
  };
};

export default mapItemProps;
