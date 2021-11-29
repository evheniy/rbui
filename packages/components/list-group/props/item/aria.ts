import { MapItemAria as M } from '../../types';

const mapAria: M = ({ active, disabled }) => ({
  ...(active ? { 'aria-current': 'true' } : {}),
  ...(disabled ? { 'aria-disabled': 'true' } : {}),
});

export default mapAria;
