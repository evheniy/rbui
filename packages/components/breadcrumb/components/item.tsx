import React, { FC } from 'react';

import cn from 'classnames';

import { ItemProps as P } from '../types';

const Item:FC<P> = props => {
  const {
    active = false,
    href,
    children,
    ...rest
  } = props;

  if (active && !rest['aria-current']) {
    rest['aria-current'] = 'page';
  }

  return (
    <li className={cn('breadcrumb-item', { active })} {...rest}>
      <a href={href || undefined}>
        {children}
      </a>
    </li>
  );
};

Item.displayName = 'Item';

export default Item;
