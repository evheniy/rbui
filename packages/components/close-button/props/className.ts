import cn from 'classnames';

import { MapClassName as M } from '../types';

const mapClassName: M = ({ white, className }) => cn(
  'btn-close',
  { 'btn-close-white': white },
  className,
);

export default mapClassName;
