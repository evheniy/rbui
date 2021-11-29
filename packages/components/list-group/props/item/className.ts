import cn from 'classnames';

import { MapItemClassName as M } from '../../types';

const mapGroupClassName: M = props => {
  const {
    action,
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    active,
    disabled,
    className,
  } = props;

  return cn(
    'list-group-item',
    {
      'list-group-item-action': action,
      'list-group-item-primary': primary,
      'list-group-item-secondary': secondary,
      'list-group-item-success': success,
      'list-group-item-danger': danger,
      'list-group-item-warning': warning,
      'list-group-item-info': info,
      'list-group-item-light': light,
      'list-group-item-dark': dark,
      active,
      disabled,
    },
    className,
  );
};

export default mapGroupClassName;
