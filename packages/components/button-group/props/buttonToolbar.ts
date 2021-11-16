import cn from 'classnames';

import { MapButtonToolbarProps as P } from '../types';

const mapButtonToolbarProps: P = props => {
  const newProps = { ...props };

  newProps.className = cn('btn-toolbar', newProps.className);
  newProps.role = 'toolbar';
  newProps['aria-label'] = newProps['aria-label'] || 'ButtonToolbar';

  return newProps;
};

export default mapButtonToolbarProps;
