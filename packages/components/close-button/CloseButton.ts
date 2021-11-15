import button from '@rbui/core/jsx/button';

import withCloseButton from './hocs/closeButton';

const CloseButton = withCloseButton(button);
CloseButton.displayName = 'CloseButton';

export default CloseButton;
