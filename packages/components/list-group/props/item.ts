import cn from 'classnames';

import variant from '@rbui/core/variant';

import { MapItemProps as P } from '../types';

const mapItemProps: P = props => {
  const {
    active,

    disabled,

    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,

    ...rest
  } = props;

  const newProps = { ...rest };

  const classes = ['list-group-item'];

  const style = variant({
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
  });

  if (style) {
    classes.push(`list-group-item-${style}`);
  }

  if (active) {
    classes.push('active');
    newProps['aria-current'] = 'true';
  }

  if (disabled) {
    classes.push('disabled');
    newProps['aria-disabled'] = 'true';
  }

  newProps.className = cn(...classes, newProps.className);

  return newProps;
};

export default mapItemProps;
