import cn from 'classnames';

import { MapListGroupProps as P, Breakpoints } from '../types';

const mapListGroupProps: P = ({ flush, horizontal, ...props }) => {
  const newProps = { ...props };

  newProps.className = cn(
    'list-group',
    { 'list-group-flush': !!flush },
    { 'list-group-horizontal': !flush && horizontal === true },
    { [`list-group-horizontal-${horizontal}`]: !flush && horizontal && !!Breakpoints[horizontal as Breakpoints] },
    newProps.className,
  );

  return newProps;
};

export default mapListGroupProps;
