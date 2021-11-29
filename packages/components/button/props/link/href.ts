import { MapLinkHref as M } from '../../types';

const mapHref: M = ({ href, disabled }) => ({
  href: disabled ? undefined : href,
});

export default mapHref;
