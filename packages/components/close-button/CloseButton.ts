import mapProps from '@rbui/core/hoc/props';
import button from '@rbui/core/jsx/button';

import mapCloseButtonProps from './props/closeButton';

const withCloseButton = mapProps(mapCloseButtonProps);

const CloseButton = withCloseButton(button);
CloseButton.displayName = 'CloseButton';

export default CloseButton;
