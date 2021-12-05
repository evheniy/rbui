import React, { FC, forwardRef } from 'react';

import compose, { MapProps } from '@rbui/core/props/compose';

const withProps = <P extends object, R extends object = P>(...mapProps: Array<MapProps<P, R>>) => (Component: FC<R>) => {
  const Cmp = forwardRef<R, P>((props, ref) => <Component {...compose(...mapProps)(props) as R} ref={ref} />);

  Cmp.displayName = Component.displayName || Component.name || 'HOC';

  return Cmp;
};

export default withProps;
