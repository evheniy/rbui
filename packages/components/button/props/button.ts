import cn from 'classnames';

import variant from '@rbui/core/variant';

import useToggle from '@rbui/core/use-toggle';

import { MapButtonProps as P, ButtonTypes } from '../types';

const mapButtonProps: P = props => {
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

    ...rest
  } = props;

  const [active, setActive] = useToggle(props.active);

  const newProps = { ...rest };

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

  newProps.type = newProps.type || ButtonTypes.button;
  newProps.className = cn(...classes, newProps.className);

  newProps.onClick = event => {
    setActive();

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return newProps;
};

export default mapButtonProps;
