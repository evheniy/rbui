import aria from './aria';
import mapStyle from './style';

import { MapBreadcrumbProps as P } from '../../types';

const mapBreadcrumbProps: P = ({ divider, style = {}, ...props }) => ({
  ...aria,
  style: mapStyle({ divider, style }),
  ...props,
});
export default mapBreadcrumbProps;
