import cn from 'classnames';

import { MapCloseButtonProps as P } from '../types';

const mapCloseButtonProps: P = ({ white, ...props }) => {
  const newProps = { ...props };

  newProps.type = newProps.type || 'button';
  newProps['aria-label'] = newProps['aria-label'] || 'Close';
  newProps.className = cn('btn-close', { 'btn-close-white': !!white }, newProps.className);

  return newProps;
};

export default mapCloseButtonProps;
