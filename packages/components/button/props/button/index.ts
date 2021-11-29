import validate from '../base/validation';
import mapAria from '../base/aria';
import mapClassName from '../base/className';
import action from '../base/action';

import type from './type';

import { MapButtonProps as P } from '../../types';

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
    active: isActive = false,
    onClick: click,
    className,
    ...rest
  } = props;

  validate({
    lg,
    sm,
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

  const { active, onClick } = action({ active: isActive, toggle, onClick: click });

  return {
    ...type,
    ...mapAria({ active }),
    className: mapClassName({
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
      className,
    }),
    onClick,
    ...rest,
  };
};

export default mapButtonProps;
