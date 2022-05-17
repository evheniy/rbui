import { oneOf, requires } from '@rbui/core/props/validation';

import { MapProps as P, TextProps } from '../types';
import mapClassName from './className';

const mapProps: P = props => {
  const {
    start = false,
    center = false,
    end = false,
    sm = false,
    md = false,
    lg = false,
    xl = false,
    wrap = false,
    nowrap = false,
    break: textBreak = false,
    lowercase = false,
    uppercase = false,
    capitalize = false,
    fs,
    fw,
    fst,
    lh,
    monospace = false,
    muted = false,
    reset = false,
    decoration,
    className,
    ...rest
  } = props;

  oneOf({ start, center, end });
  oneOf({
    sm,
    md,
    lg,
    xl,
  });
  requires(props, ['sm', 'md', 'lg', 'xl'], ['start', 'center', 'end']);
  oneOf({ wrap, nowrap });
  oneOf({ lowercase, uppercase, capitalize });
  oneOf({ muted, reset });

  return {
    className: mapClassName({
      start,
      center,
      end,
      sm,
      md,
      lg,
      xl,
      wrap,
      nowrap,
      break: textBreak,
      lowercase,
      uppercase,
      capitalize,
      fs,
      fw,
      fst,
      lh,
      monospace,
      muted,
      reset,
      decoration,
      className,
    } as TextProps),
    ...rest,
  };
};

export default mapProps;
