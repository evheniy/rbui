import React from 'react';

import { P, FCP, HOC } from '@rb/core/types';

interface HocBuild {
  (
    hooks?: (props: P) => P | undefined,
    displayName? : string,
  ): HOC;
}

const hocBuilder: HocBuild = (hooks, displayName = 'HOC') => Component => {
  const Cmp: FCP = props => {
    if (hooks) {
      const hookProps = hooks(props) || {};

      return <Component {...props} {...hookProps} />;
    }

    return <Component {...props} />;
  };

  Cmp.displayName = displayName;

  return Cmp;
};

export default hocBuilder;
