import React, { FC, forwardRef } from 'react';

interface MapProps<P extends object, M extends object> {
  (props: P): M;
}

const withProps = <P extends object, M extends object>(mapProps: MapProps<P, M>) => (Component: FC<M>) => {
  const Cmp = forwardRef<M, P>((props, ref) => <Component {...mapProps(props)} ref={ref} />);

  Cmp.displayName = Component.displayName || Component.name || 'HOC';

  return Cmp;
};

export default withProps;
