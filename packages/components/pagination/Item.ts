import list from '@rbui/core/jsx/list';

import withItem from './hocs/item';

const Item = withItem(list);
Item.displayName = 'Item';

export default Item;

export { default as Link } from './Link';
export { default as Text } from './Text';
