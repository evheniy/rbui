import validate from '../base/validation';
import mapAria from '../base/aria';
import mapClassName from '../base/className';
import action from '../base/action';

import mapHref from './href';
import mapTabIndex from './tabIndex';
import role from './role';

import { MapLinkProps as P } from '../../types';

const mapLinkProps: P = props => {
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
    href,
    disabled,
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
    ...mapAria({ active, disabled }),
    ...mapHref({ href, disabled }),
    ...mapTabIndex({ disabled }),
    role,
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
      disabled,
      className,
    }),
    onClick,
    ...rest,
  };
};

export default mapLinkProps;
