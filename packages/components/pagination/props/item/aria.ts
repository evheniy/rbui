import { MapItemAria as M } from '../../types';

const mapAria: M = ({ active }) => (active ? { 'aria-current': 'page' } : {});

export default mapAria;
