import { oneOf } from '@rbui/core/props/validation';

import mapClassName from './className';

import { MapPaginationProps as P } from '../../types';

const mapPaginationProps: P = props => {
  const {
    sm = false,
    lg = false,
    className,
    ...rest
  } = props;

  oneOf({ lg, sm });

  return {
    className: mapClassName({ className, lg, sm }),
    ...rest,
  };
};

export default mapPaginationProps;
