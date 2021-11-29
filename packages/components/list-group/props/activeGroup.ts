import { oneOf } from '@rbui/core/props/validation';

import mapClassName from './group/className';

import { MapActiveGroupProps as P } from '../types';

const mapActiveGroupProps: P = props => {
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

export default mapActiveGroupProps;
