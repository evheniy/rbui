import cn from 'classnames';

import { MapItemProps as P } from '../types';

const mapItemProps: P = ({ active = false, ...rest }) => {
  const newProps = { ...rest };

  if (active && !newProps['aria-current']) {
    newProps['aria-current'] = 'page';
  }

  newProps.href = newProps.href || undefined;
  newProps.className = cn('breadcrumb-item', { active }, newProps.className);

  return newProps;
};

export default mapItemProps;
