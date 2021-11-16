import React from 'react';

import cn from 'classnames';

import variant from '@rbui/core/variant';

import { MapBarProps as P } from '../types';

const mapBarProps: P = props => {
  const {
    min = 0,
    max = 100,
    now = 0,
    label = false,
    striped = false,
    animated = false,

    success = false,
    info = false,
    warning = false,
    danger = false,

    ...rest
  } = props;

  const newProps = { ...rest };

  const classes = ['progress-bar'];

  const color = variant({
    success,
    info,
    warning,
    danger,
  });

  if (color) {
    classes.push(`bg-${color}`);
  }

  if (striped) {
    classes.push('progress-bar-striped');
  }

  if (animated) {
    classes.push('progress-bar-animated');
  }

  newProps['aria-valuemin'] = min || 0;
  newProps['aria-valuemax'] = max || 100;

  if (!now) {
    newProps['aria-valuenow'] = 0;
  } else {
    newProps['aria-valuenow'] = now;
    newProps.style = { ...rest.style, width: `${now}%` };
  }

  newProps.className = cn(...classes, newProps.className);
  newProps.role = 'progressbar';
  newProps.children = newProps.children || ((label && now) ? `${now}%` : <span className="visually-hidden">{`${now}%`}</span>);

  return newProps;
};

export default mapBarProps;
