import { oneOf } from '@rbui/core/props/validation';

import mapClassName from './group/className';

import { MapListGroupProps as P } from '../types';

const mapListGroupProps: P = props => {
  const {
    flush,
    horizontal,
    className,
    ...rest
  } = props;

  oneOf({ flush, horizontal: !!horizontal });

  return {
    className: mapClassName({
      flush,
      horizontal,
      className,
    }),
    ...rest,
  };
};

export default mapListGroupProps;
