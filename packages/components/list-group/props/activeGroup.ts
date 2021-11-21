import { MapActiveGroupProps as P } from '../types';

import mapGroupClassName from './map/groupClassName';

const mapActiveGroupProps: P = ({ flush, horizontal, ...props }) => {
  const newProps = { ...props };

  newProps.className = mapGroupClassName({
    base: ['list-group'],
    flush,
    horizontal,
    className: newProps.className,
  });

  return newProps;
};

export default mapActiveGroupProps;
