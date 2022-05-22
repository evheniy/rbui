import React, { ComponentPropsWithRef, FC, forwardRef } from 'react';

/**
 * HTML List (li) with ref
 */
const List: FC<ComponentPropsWithRef<'li'>> = forwardRef((props, ref) => <li {...props} ref={ref} />);
List.displayName = 'li';

export default List;
