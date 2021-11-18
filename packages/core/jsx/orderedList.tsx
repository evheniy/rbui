import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

const OrderedList: FC<ComponentPropsWithRef<'ol'>> = forwardRef((props, ref) => <ol {...props} ref={ref} />);
OrderedList.displayName = 'ol';

export default OrderedList;
