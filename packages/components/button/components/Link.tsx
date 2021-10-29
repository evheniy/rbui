/* eslint-disable react/button-has-type */

import React, { FC } from 'react';

import cn from 'classnames';

import variant from '@rbui/core/variant';

import { LinkProps as P } from '../types';

const Link:FC<P> = props => {
  const {
    primary = false,
    secondary = false,
    success = false,
    danger = false,
    warning = false,
    info = false,
    light = false,
    dark = false,
    link = false,
    outline = false,
    lg = false,
    sm = false,
    nowrap = false,
    toggle = false,
    active = false,
    setActive,
    className,
    children,
    href,
    disabled,
    ...rest
  } = props;

  const classes = ['btn'];

  if (nowrap) {
    classes.push('text-nowrap');
  }

  const size = variant({ lg, sm });

  if (size) {
    classes.push(`btn-${size}`);
  }

  const style = variant({
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    link,
  });

  if (style) {
    classes.push(`${outline ? 'btn-outline-' : 'btn-'}${style}`);
  }

  if (toggle) {
    if (active) {
      rest['aria-pressed'] = 'true';
      classes.push('active');
    }
  }

  if (disabled) {
    classes.push('disabled');
    rest['aria-disabled'] = 'true';
    rest.tabIndex = -1;
  }

  return (
    <a
      href={disabled ? undefined : href}
      className={cn(...classes, className)}
      role="button"
      {...rest}
    >
      {children}
    </a>
  );
};

Link.displayName = 'Link';

export default Link;
