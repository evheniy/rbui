import React, { FC } from 'react';

import cn from 'classnames';

import { ItemProps as P } from '../types';

import Link from './link';
import Text from './text';

const Item:FC<P> = props => {
  const {
    active,
    disabled,
    href,
    children,
    custom,
    className,
    ...rest
  } = props;

  if (active) {
    rest['aria-current'] = 'page';
  }

  const result = (active || disabled) ? (
    <Text>{children}</Text>
  ) : (
    <Link href={href}>{children}</Link>
  );

  return (
    <li className={cn('page-item', { active, disabled }, className)} {...rest}>
      {custom ? children : result}
    </li>
  );
};

Item.displayName = 'Item';

export default Item;
