import { MapBreadcrumbStyle as M } from '../../types';

const mapStyle: M = ({ divider, style }) => ({
  ...(divider ? { '--bs-breadcrumb-divider': divider } : {}),
  ...style,
});

export default mapStyle;
