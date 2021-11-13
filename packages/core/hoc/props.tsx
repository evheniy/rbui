import React, { FC } from 'react';

interface MapProps<P extends object, M extends object> {
  (props: P): M;
}

const withProps = <P extends object, M extends object>(mapProps: MapProps<P, M>) => (Component: FC<M> | string) => {
  const Cmp: FC<P> = props => <Component {...mapProps(props as P) as M} />;

  Cmp.displayName = (Component as FC).displayName || (Component as FC).name || 'HOC';

  return Cmp;
};

export default withProps;
