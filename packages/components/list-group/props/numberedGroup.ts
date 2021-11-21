import { MapNumberedGroupProps as P } from '../types';

import mapGroupClassName from './map/groupClassName';

const mapNumberedGroupProps: P = ({ flush, horizontal, ...props }) => {
  const newProps = { ...props };

  newProps.className = mapGroupClassName({
    base: ['list-group', 'list-group-numbered'],
    flush,
    horizontal,
    className: newProps.className,
  });

  return newProps;
};

export default mapNumberedGroupProps;
