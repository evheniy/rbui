import mapProps from '@rbui/core/hoc/props';
import button from '@rbui/core/jsx/button';

import mapCloseButtonProps from './props/closeButton';

const withCloseButton = mapProps(mapCloseButtonProps);

/**
 * @name Close Button
 * @link https://getbootstrap.com/docs/5.1/components/close-button/
 *
 * @param {boolean} white - Makes the button white.
 */
const CloseButton = withCloseButton(button);
CloseButton.displayName = 'CloseButton';

export default CloseButton;
