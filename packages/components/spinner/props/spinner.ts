import { oneOf } from '@rbui/core/props/validation';

import mapClassName from './className';
import role from './role';
import aria from './aria';
import mapChildren from './children';

import { MapSpinnerProps as P } from '../types';

const mapSpinnerProps: P = props => {
  const {
    grow = false,
    primary = false,
    secondary = false,
    success = false,
    danger = false,
    warning = false,
    info = false,
    light = false,
    dark = false,
    sm = false,
    className,
    children,
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

  return {
    role,
    ...aria,
    className: mapClassName({
      grow,
      sm,
      primary,
      secondary,
      success,
      danger,
      warning,
      info,
      light,
      dark,
      className,
    }),
    children: mapChildren(children),
    ...rest,
  };
};

export default mapSpinnerProps;
