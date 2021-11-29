import cn from 'classnames';

import { MapSpinnerClassName as M } from '../types';

const mapClassName: M = props => {
  const {
    grow,
    sm,
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    className,
  } = props;

  return cn(
    {
      'spinner-border': !grow,
      'spinner-grow': grow,
      'spinner-border-sm': sm && !grow,
      'spinner-grow-sm': sm && grow,
      'text-primary': primary,
      'text-secondary': secondary,
      'text-success': success,
      'text-danger': danger,
      'text-warning': warning,
      'text-info': info,
      'text-light': light,
      'text-dark': dark,
    },
    className,
  );
};

export default mapClassName;
