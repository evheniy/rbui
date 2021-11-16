import { MapBreadcrumbProps as P, Style } from '../types';

const mapBreadcrumbProps: P = ({ divider, ...rest }) => {
  const newProps = { ...rest };

  const style = newProps.style || {};

  const breadcrumbStyle: Style = divider ? { ...style, '--bs-breadcrumb-divider': `'${divider}'` } : style;

  newProps['aria-label'] = 'breadcrumb';
  newProps.style = breadcrumbStyle;

  return newProps;
};

export default mapBreadcrumbProps;
