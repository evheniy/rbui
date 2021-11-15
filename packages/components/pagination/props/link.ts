import cn from 'classnames';

import { MapLinkProps as P } from '../types';

const mapLinkProps: P = props => {
  const newProps = { ...props };

  newProps.className = cn('page-link', newProps.className);

  return newProps;
};

export default mapLinkProps;
