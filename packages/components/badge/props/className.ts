import cn from 'classnames';

import { MapBadgeClassName as M } from '../types';

const mapClassName: M = props => {
  const {
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    pill,
    circle,
    className,
  } = props;

  return cn(
    'badge',
    {
      'bg-primary': primary,
      'bg-secondary': secondary,
      'bg-success': success,
      'bg-danger': danger,
      'bg-warning': warning,
      'bg-info': info,
      'bg-light': light,
      'bg-dark': dark,
      'text-dark': warning || info || light,
      'rounded-pill': pill,
      'rounded-circle': circle,
    },
    className,
  );
};

export default mapClassName;
