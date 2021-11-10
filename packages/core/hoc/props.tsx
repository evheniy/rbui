import React, { FC } from 'react';

interface Props<P extends object, M extends object> {
  (props: P): M;
}

interface Options {
  displayName?: string;
}

interface Input<P extends object, M extends object> {
  (props: P): M | P;
}

export const mapProps = <P extends object, M extends object>(propsMapper: Props<P, M>, options: Options = {}) => (Component: FC<M>) => {
  const {
    displayName = 'HOC',
  } = options;

  const Cmp: FC<P> = props => <Component {...propsMapper(props as P) as M} />;

  Cmp.displayName = displayName || 'MapPropsHOC';

  return Cmp;
};

const withProps = <P extends object, M extends object>(input: Input<P, M> | M, options: Options = {}) => mapProps((props: P) => ({
  ...props as P,
  ...(typeof input === 'function' ? input(props) : input) as M,
}), options);

export default withProps;
