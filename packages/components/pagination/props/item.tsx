import React from 'react';

import cn from 'classnames';

import { MapItemProps as P } from '../types';

import Link from '../Link';
import Text from '../Text';

const mapItemProps: P = props => {
  const {
    active,
    disabled,
    href,
    custom,
    ...rest
  } = props;

  const newProps = { ...rest };

  if (active) {
    rest['aria-current'] = 'page';
  }

  const result = (active || disabled) ? (
    <Text>{newProps.children}</Text>
  ) : (
    <Link href={href}>{newProps.children}</Link>
  );

  newProps.className = cn('page-item', { active, disabled }, newProps.className);
  newProps.children = custom ? newProps.children : result;

  return newProps;
};

export default mapItemProps;
