import { oneOf } from '@rbui/core/props/validation';

import mapClassName from './group/className';

import { MapNumberedGroupProps as P } from '../types';

const mapNumberedGroupProps: P = props => {
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
      numbered: true,
    }),
    ...rest,
  };
};

export default mapNumberedGroupProps;
