import React, { ComponentPropsWithRef, FC, forwardRef } from 'react';

/**
 * HTML unordered list (ul) with ref
 */
const UnorderedList: FC<ComponentPropsWithRef<'ul'>> = forwardRef((props, ref) => <ul {...props} ref={ref} />);
UnorderedList.displayName = 'ul';

export default UnorderedList;
