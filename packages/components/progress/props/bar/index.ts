import { oneOf } from '@rbui/core/props/validation';

import role from './role';
import mapAria from './aria';
import mapStyle from './style';
import mapClassName from './className';
import mapChildren from './children';

import { MapBarProps as P } from '../../types';

const mapBarProps: P = props => {
  const {
    min = 0,
    max = 100,
    now = 0,
    label = false,
    striped = false,
    animated = false,
    success = false,
    info = false,
    warning = false,
    danger = false,
    className,
    style,
    children,
    ...rest
  } = props;

  oneOf({
    success,
    info,
    warning,
    danger,
  });

  return {
    role,
    ...mapAria({ min, max, now }),
    style: mapStyle({ now, style }),
    className: mapClassName({
      success,
      info,
      warning,
      danger,
      striped,
      animated,
      className,
    }),
    children: mapChildren({ children, label, now }),
    ...rest,
  };
};

export default mapBarProps;
