import { FC } from 'react';

import { SpinnerProps } from './types';

import withSpinner from './hocs/spinner';

const Spinner:FC<SpinnerProps> = withSpinner('span');
Spinner.displayName = 'Spinner';

export default Spinner;
