import cn from 'classnames';

import { MapClassName as M } from '../types';

/**
 *
 * @param props
 * @param {boolean} props.start Start aligned text on all viewport sizes
 * @param {boolean} props.center Center aligned text on all viewport sizes
 * TODO: add all other fields
 * @returns {string} className
 */
const mapClassName: M = props => {
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
  } = props;

  return cn(
    {
      'text-start': start,
      'text-center': center,
      'text-end': end,
      'text-sm-start': sm,
      'text-md-start': md,
      'text-lg-start': lg,
      'text-xl-start': xl,
      'text-wrap': wrap,
      'text-nowrap': nowrap,
      'text-break': textBreak,
      'text-lowercase': lowercase,
      'text-uppercase': uppercase,
      'text-capitalize': capitalize,
      [`fs-${fs}`]: !!fs,
      [`fw-${fw}`]: !!fw,
      [`fst-${fst}`]: !!fst,
      [`lh-${lh}`]: !!lh,
      'font-monospace': monospace,
      'text-muted': muted,
      'text-reset': reset,
      [`text-decoration-${decoration}`]: !!decoration,
    },
    className,
  );
};

export default mapClassName;
