import React, { FC, ComponentPropsWithRef, forwardRef } from 'react';

const UnorderedList: FC<ComponentPropsWithRef<'ul'>> = forwardRef((props, ref) => <ul {...props} ref={ref} />);
UnorderedList.displayName = 'ul';

export default UnorderedList;
