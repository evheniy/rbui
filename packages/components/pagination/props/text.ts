import cn from 'classnames';

import { MapTextProps as P } from '../types';

const mapTextProps: P = props => {
  const newProps = { ...props };

  newProps.className = cn('page-link', newProps.className);

  return newProps;
};

export default mapTextProps;
