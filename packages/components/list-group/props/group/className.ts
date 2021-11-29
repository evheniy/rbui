import cn from 'classnames';

import { MapGroupClassName as M } from '../../types';

const mapClassName: M = props => {
  const {
    numbered,
    flush,
    horizontal,
    className,
  } = props;

  return cn(
    'list-group',
    {
      'list-group-numbered': numbered,
      'list-group-flush': flush,
      'list-group-horizontal': !flush && horizontal === true,
      'list-group-horizontal-sm': !flush && horizontal === 'sm',
      'list-group-horizontal-md': !flush && horizontal === 'md',
      'list-group-horizontal-lg': !flush && horizontal === 'lg',
      'list-group-horizontal-xl': !flush && horizontal === 'xl',
      'list-group-horizontal-xxl': !flush && horizontal === 'xxl',
    },
    className,
  );
};

export default mapClassName;
