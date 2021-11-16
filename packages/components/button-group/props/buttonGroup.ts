import cn from 'classnames';

import variant from '@rbui/core/variant';

import { MapButtonGroupProps as P } from '../types';

const mapButtonGroupProps: P = props => {
  const {
    lg,
    sm,
    vertical,
    ...rest
  } = props;

  const newProps = { ...rest };

  const classes = vertical ? ['btn-group-vertical'] : ['btn-group'];

  const size = variant({ lg, sm });

  if (size) {
    classes.push(`btn-group-${size}`);
  }

  newProps.className = cn(...classes, newProps.className);
  newProps.role = 'group';
  newProps['aria-label'] = newProps['aria-label'] || 'ButtonGroup';

  return newProps;
};

export default mapButtonGroupProps;
