import cn from 'classnames';

import { MapItemClassName as M } from '../../types';

const mapClassName: M = ({ className, active, disabled }) => cn('page-item', { active, disabled }, className);

export default mapClassName;
