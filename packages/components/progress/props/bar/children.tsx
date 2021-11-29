import React from 'react';

import { MapBarChildren as M } from '../../types';

const mapChildren: M = ({ children, label, now }) => (
  children || ((label && now) ? `${now}%` : <span className="visually-hidden">{`${now}%`}</span>)
);

export default mapChildren;
