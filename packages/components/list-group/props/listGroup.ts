import { MapListGroupProps as P } from '../types';

import mapGroupClassName from './map/groupClassName';

const mapListGroupProps: P = ({ flush, horizontal, ...props }) => {
  const newProps = { ...props };

  newProps.className = mapGroupClassName({
    base: ['list-group'],
    flush,
    horizontal,
    className: newProps.className,
  });

  return newProps;
};

export default mapListGroupProps;
