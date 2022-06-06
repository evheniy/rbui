import text from './text';
import html from './html';
import json from './json';
import xml from './xml';

import headers from './headers';

import { Format, MapType } from './types';

const map: MapType = ({
  [headers.text]: text,
  [headers.html]: html,
  [headers.json]: json,
  [headers.xml]: xml,
});

const format: Format = (type, message = '') => ((type && map[type]) || text)(message);

export default format;
