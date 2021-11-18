import cn from 'classnames';

import variant from '@rbui/core/variant';

import { MapButtonItemProps as P } from '../types';

const mapButtonItemProps: P = props => {
  const {
    active,

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

  const classes = ['list-group-item', 'list-group-item-action'];

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

  if (newProps.disabled) {
    newProps['aria-disabled'] = 'true';
  }

  newProps.className = cn(...classes, newProps.className);

  return newProps;
};

export default mapButtonItemProps;
