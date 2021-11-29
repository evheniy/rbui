import cn from 'classnames';

import { MapPaginationClassName as M } from '../../types';

const mapClassName: M = ({ className, lg, sm }) => cn(
  'pagination',
  {
    'pagination-lg': lg,
    'pagination-sm': sm,
  },
  className,
);

export default mapClassName;
