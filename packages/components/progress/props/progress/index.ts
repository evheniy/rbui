import { oneOf } from '@rbui/core/props/validation';

import mapClassName from './className';
import mapChildren from './children';

import { BaseProps, MapProgressProps as P } from '../../types';

const mapProgressProps: P = props => {
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
    children,
    ...rest
  } = props;

  if (children) {
    oneOf({
      success,
      info,
      warning,
      danger,
    });
  }

  return {
    className: mapClassName({ className }),
    children: mapChildren({
      children,
      ...{
        min,
        max,
        now,
        label,
        striped,
        animated,
        success,
        info,
        warning,
        danger,
      } as BaseProps,
    }),
    ...rest,
  };
};

export default mapProgressProps;
