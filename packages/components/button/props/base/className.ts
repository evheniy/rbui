import cn from 'classnames';

import { MapClassName as M } from '../../types';

const mapClassName: M = props => {
  const {
    nowrap,
    lg,
    sm,
    outline,
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    link,
    active,
    disabled,
    className,
  } = props;

  return cn(
    'btn',
    {
      'text-nowrap': nowrap,
      'btn-lg': lg,
      'btn-sm': sm,
      'btn-primary': primary && !outline,
      'btn-secondary': secondary && !outline,
      'btn-success': success && !outline,
      'btn-danger': danger && !outline,
      'btn-warning': warning && !outline,
      'btn-info': info && !outline,
      'btn-light': light && !outline,
      'btn-dark': dark && !outline,
      'btn-link': link && !outline,
      'btn-outline-primary': primary && outline,
      'btn-outline-secondary': secondary && outline,
      'btn-outline-success': success && outline,
      'btn-outline-danger': danger && outline,
      'btn-outline-warning': warning && outline,
      'btn-outline-info': info && outline,
      'btn-outline-light': light && outline,
      'btn-outline-dark': dark && outline,
      'btn-outline-link': link && outline,
      active,
      disabled,
    },
    className,
  );
};

export default mapClassName;
