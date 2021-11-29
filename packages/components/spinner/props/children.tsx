import React from 'react';

import { MapSpinnerChildren as M } from '../types';

const mapChildren: M = children => children || <span className="visually-hidden">Loading...</span>;

export default mapChildren;
