import { MapBarAria as M } from '../../types';

const mapAria: M = ({ min, max, now }) => ({
  'aria-valuemin': min || 0,
  'aria-valuemax': max || 100,
  'aria-valuenow': now || 0,
});

export default mapAria;
