import React from 'react';

import cn from 'classnames';

import { MapProgressProps as P } from '../types';

import Bar from '../Bar';

const mapProgressProps: P = props => {
  const {
    min,
    max,
    now,

    label,

    success,
    info,
    warning,
    danger,

    striped,

    animated,

    ...rest
  } = props;

  const newProps = { ...rest };

  const barProps = {
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
  };

  newProps.className = cn('progress', newProps.className);
  newProps.children = newProps.children || <Bar {...barProps} />;

  return newProps;
};

export default mapProgressProps;
