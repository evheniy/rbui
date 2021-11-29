import { oneOf } from '@rbui/core/props/validation';

import mapAria from './item/aria';
import mapClassName from './item/className';

import { MapItemProps as P } from '../types';

const mapItemProps: P = props => {
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
    className: mapClassName({
      primary,
      secondary,
      success,
      danger,
      warning,
      info,
      light,
      dark,
      active,
      disabled,
      className,
    }),
    ...rest,
  };
};

export default mapItemProps;
