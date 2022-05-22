import React, { ComponentPropsWithRef, FC, forwardRef } from 'react';

/**
 * HTML Ordered list (ol) with ref
 */
const OrderedList: FC<ComponentPropsWithRef<'ol'>> = forwardRef((props, ref) => <ol {...props} ref={ref} />);
OrderedList.displayName = 'ol';

export default OrderedList;
