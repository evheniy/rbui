import { MapAria as M } from '../../types';

const mapAria: M = ({ active, disabled }) => ({
  ...(active ? { 'aria-pressed': 'true' } : {}),
  ...(disabled ? { 'aria-disabled': 'true' } : {}),
});

export default mapAria;
