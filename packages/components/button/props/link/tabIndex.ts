import { MapLinkTabIndex as M } from '../../types';

const mapTabIndex: M = ({ disabled }) => (disabled ? { tabIndex: -1 } : {});

export default mapTabIndex;
