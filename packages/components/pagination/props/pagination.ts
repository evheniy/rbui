import cn from 'classnames';

import variant from '@rbui/core/variant';

import { MapPaginationProps as P } from '../types';

const mapPaginationProps: P = props => {
  const {
    sm = false,
    lg = false,
    ...rest
  } = props;

  const newProps = { ...rest };

  const classes = ['pagination'];

  const size = variant({ lg, sm });

  if (size) {
    classes.push(`pagination-${size}`);
  }

  newProps.className = cn(...classes, newProps.className);

  return newProps;
};

export default mapPaginationProps;
