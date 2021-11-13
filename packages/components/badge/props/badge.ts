import cn from 'classnames';

import variant from '@rbui/core/variant';

import { MapBadgeProps as P } from '../types';

const mapBadgeProps: P = props => {
  const {
    primary = false,
    secondary = false,
    success = false,
    danger = false,
    warning = false,
    info = false,
    light = false,
    dark = false,
    pill = false,
    circle = false,
    ...rest
  } = props;

  const newProps = { ...rest };

  const classes = ['badge'];

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
    classes.push(`bg-${style}`);

    if (['warning', 'info', 'light'].includes(style)) {
      classes.push('text-dark');
    }
  }

  if (pill) {
    classes.push('rounded-pill');
  }

  if (circle) {
    classes.push('rounded-circle');
  }

  newProps.className = cn(...classes, newProps.className);

  return newProps;
};

export default mapBadgeProps;
