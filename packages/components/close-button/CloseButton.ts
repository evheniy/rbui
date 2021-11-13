import { FC } from 'react';

import { CloseButtonProps } from './types';

import withCloseButton from './hocs';

const CloseButton:FC<CloseButtonProps> = withCloseButton('button');
CloseButton.displayName = 'CloseButton';

export default CloseButton;
