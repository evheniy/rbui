import React from 'react';

import Link from '../../Link';
import Text from '../../Text';

import { MapItemChildren as M } from '../../types';

const mapChildren: M = props => {
  const {
    active,
    disabled,
    href,
    children,
    custom,
  } = props;

  const result = (active || disabled) ? (
    <Text>{children}</Text>
  ) : (
    <Link href={href}>{children}</Link>
  );

  return custom ? children : result;
};

export default mapChildren;
