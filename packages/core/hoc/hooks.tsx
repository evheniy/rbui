import React, { FC } from 'react';

interface Hooks<P extends object, H extends object> {
  (props: P): H | undefined;
}

interface Options {
  displayName?: string;
}

const withHooks = <P extends object, H extends object>(hooks: Hooks<P, H>, options: Options = {}) => (Component: FC<P & H | P>) => {
  const {
    displayName = 'HOC',
  } = options;

  const Cmp: FC<P & H | P> = props => {
    if (hooks) {
      const hookProps = hooks(props) || {};

      return <Component {...props as P} {...hookProps as H} />;
    }

    return <Component {...props as P} />;
  };

  Cmp.displayName = displayName;

  return Cmp;
};

export default withHooks;
