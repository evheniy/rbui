import cn from 'classnames';

import { MapButtonGroupClassName as M } from '../../types';

const mapClassName: M = props => {
  const {
    vertical,
    lg,
    sm,
    className,
  } = props;

  return cn(
    {
      'btn-group': !vertical,
      'btn-group-vertical': vertical,
      'btn-group-lg': lg,
      'btn-group-sm': sm,
    },
    className,
  );
};

export default mapClassName;
