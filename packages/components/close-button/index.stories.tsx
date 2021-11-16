import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import CloseButton from '.';

export default {
  title: 'Components/CloseButton/CloseButtons',
  parameters: {
    layout: 'centered',
    options: { showPanel: false },
  },
};

export const Base = () => (
  <div style={{ padding: 30 }}>
    <CloseButton aria-label="Close" />
  </div>
);
Base.storyName = 'Base';

export const Disabled = () => (
  <div style={{ padding: 30 }}>
    <CloseButton aria-label="Close" disabled />
  </div>
);
Disabled.storyName = 'Disabled';

export const White = () => (
  <div style={{ backgroundColor: 'black', padding: 30 }}>
    <CloseButton aria-label="Close" white />
    <CloseButton aria-label="Close" disabled white />
  </div>
);
White.storyName = 'White';
