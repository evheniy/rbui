import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Style } from './types';

import Breadcrumb, { Item } from '.';

export default {
  title: 'Components/Breadcrumb/Breadcrumbs',
  parameters: {
    layout: 'centered',
    options: { showPanel: false },
  },
};

export const Base = () => (
  <div>
    <Breadcrumb>
      <Item active>Home</Item>
    </Breadcrumb>
    &nbsp;
    <Breadcrumb>
      <Item href="#">Home</Item>
      <Item active>Library</Item>
    </Breadcrumb>
    &nbsp;
    <Breadcrumb>
      <Item href="#">Home</Item>
      <Item href="#">Library</Item>
      <Item active>Data</Item>
    </Breadcrumb>
  </div>
);
Base.storyName = 'Base';

const style: Style = {
  '--bs-breadcrumb-divider': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'><path d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'currentColor\'/></svg>")',
};

export const Dividers = () => (
  <div>
    <Breadcrumb divider=">">
      <Item href="#">Home</Item>
      <Item active>Library</Item>
    </Breadcrumb>
    &nbsp;
    <Breadcrumb style={style}>
      <Item href="#">Home</Item>
      <Item active>Library</Item>
    </Breadcrumb>
    &nbsp;
    <Breadcrumb divider=" ">
      <Item href="#">Home</Item>
      <Item active>Library</Item>
    </Breadcrumb>
  </div>
);
Dividers.storyName = 'Dividers';
