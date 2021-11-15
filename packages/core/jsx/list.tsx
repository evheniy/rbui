import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

const List: FC<ComponentPropsWithRef<'li'>> = forwardRef((props, ref) => <li {...props} ref={ref} />);
List.displayName = 'li';

export default List;
