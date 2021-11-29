import cn from 'classnames';

import { MapItemClassName as M } from '../../types';

const mapClassName: M = ({ active, className }) => cn('breadcrumb-item', { active }, className);

export default mapClassName;
