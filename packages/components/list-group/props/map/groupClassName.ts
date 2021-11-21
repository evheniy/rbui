import cn from 'classnames';

import { Breakpoints } from '@rbui/core/variant/types';

import { GroupClassName } from '../../types';

const mapGroupClassName = ({
  base,
  flush,
  horizontal,
  className,
}: GroupClassName) => cn(
  ...base,
  { 'list-group-flush': !!flush },
  { 'list-group-horizontal': !flush && horizontal === true },
  { [`list-group-horizontal-${horizontal}`]: !flush && horizontal && Object.values(Breakpoints).includes(horizontal as Breakpoints) },
  className,
);

export default mapGroupClassName;
