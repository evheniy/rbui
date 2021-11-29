import React from 'react';

import Bar from '../../Bar';

import { MapProgressChildren as M } from '../../types';

const mapChildren: M = props => {
  const { children, ...rest } = props;

  return children || <Bar {...rest} />;
};

export default mapChildren;
