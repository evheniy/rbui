import { oneOf } from '@rbui/core/props/validation';

import { Validate as V } from '../../types';

const validate: V = props => {
  const {
    lg,
    sm,
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    link,
  } = props;

  oneOf({ lg, sm });

  oneOf({
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    link,
  });
};

export default validate;
