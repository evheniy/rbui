import { oneOf } from '@rbui/core/props/validation';

import role from './role';
import aria from './aria';
import mapClassName from './className';

import { MapButtonGroupProps as P } from '../../types';

const mapButtonGroupProps: P = props => {
  const {
    lg,
    sm,
    vertical,
    className,
    ...rest
  } = props;

  oneOf({ lg, sm });

  return {
    role,
    ...aria,
    className: mapClassName({
      vertical,
      lg,
      sm,
      className,
    }),
    ...rest,
  };
};

export default mapButtonGroupProps;
