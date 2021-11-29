import cn from 'classnames';

import { MapBarClassName as M } from '../../types';

const mapClassName: M = props => {
  const {
    success,
    info,
    warning,
    danger,
    striped,
    animated,
    className,
  } = props;

  return cn(
    'progress-bar',
    {
      'bg-success': success,
      'bg-info': info,
      'bg-warning': warning,
      'bg-danger': danger,
      'progress-bar-striped': striped,
      'progress-bar-animated': animated,
    },
    className,
  );
};

export default mapClassName;
