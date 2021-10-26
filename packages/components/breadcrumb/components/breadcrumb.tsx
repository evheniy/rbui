import React, { FC } from 'react';

import { BreadcrumbProps as P, Style } from '../types';

const Breadcrumb:FC<P> = props => {
  const {
    divider,
    children,
    style = {},
    ...rest
  } = props;

  const BreadcrumbStyle: Style = divider ? { ...style, '--bs-breadcrumb-divider': `'${divider}'` } : style;

  return (
    <nav aria-label="breadcrumb" {...rest} style={BreadcrumbStyle}>
      <ol className="breadcrumb">
        {children}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
