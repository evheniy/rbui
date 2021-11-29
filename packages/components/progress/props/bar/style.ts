import { MapBarStyle as M } from '../../types';

const mapStyle: M = ({ now = 0, style = {} }) => ({
  width: `${now}%`,
  ...style,
});

export default mapStyle;
