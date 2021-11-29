import { oneOf } from '@rbui/core/props/validation';

import mapAria from './item/aria';
import mapClassName from './item/className';

import { MapButtonItemProps as P } from '../types';

const mapButtonItemProps: P = props => {
  const {
    active,
    disabled,
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    className,
    ...rest
  } = props;

  oneOf({ active, disabled });

  oneOf({
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
  });

  return {
    ...mapAria({ active, disabled }),
    disabled,
    className: mapClassName({
      action: true,
      primary,
      secondary,
      success,
      danger,
      warning,
      info,
      light,
      dark,
      active,
      className,
    }),
    ...rest,
  };
};

export default mapButtonItemProps;
