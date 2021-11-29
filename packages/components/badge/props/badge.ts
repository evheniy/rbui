import { oneOf } from '@rbui/core/props/validation';

import mapClassName from './className';

import { MapBadgeProps as P } from '../types';

const mapBadgeProps: P = props => {
  const {
    primary = false,
    secondary = false,
    success = false,
    danger = false,
    warning = false,
    info = false,
    light = false,
    dark = false,
    pill = false,
    circle = false,
    className,
    ...rest
  } = props;

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

  oneOf({ pill, circle });

  return {
    className: mapClassName({
      primary,
      secondary,
      success,
      danger,
      warning,
      info,
      light,
      dark,
      pill,
      circle,
      className,
    }),
    ...rest,
  };
};

export default mapBadgeProps;
