import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Button from '@rbui/components/button';

import Spinner from '.';

export default {
  title: 'Components/Spinner/Spinners',
  parameters: { options: { showPanel: false } },
};

export const Base = () => <Spinner />;
Base.storyName = 'Base';

export const Colors = () => (
  <div className="d-grid gap-2 d-md-flex">
    <Spinner primary />
    <Spinner secondary />
    <Spinner success />
    <Spinner danger />
    <Spinner warning />
    <Spinner info />
    <Spinner light />
    <Spinner dark />
  </div>
);
Colors.storyName = 'Colors';

export const Growing = () => <Spinner grow />;
Growing.storyName = 'Growing';

export const GrowingColors = () => (
  <div className="d-grid gap-2 d-md-flex">
    <Spinner grow primary />
    <Spinner grow secondary />
    <Spinner grow success />
    <Spinner grow danger />
    <Spinner grow warning />
    <Spinner grow info />
    <Spinner grow light />
    <Spinner grow dark />
  </div>
);
GrowingColors.storyName = 'GrowingColors';

export const Margin = () => <Spinner className="m-5" />;
Margin.storyName = 'Margin';

export const Flex = () => (
  <div className="d-flex justify-content-center">
    <Spinner />
  </div>
);
Flex.storyName = 'Flex';

export const Text = () => (
  <div className="d-flex align-items-center">
    <strong>Loading...</strong>
    <Spinner className="ms-auto" />
  </div>
);
Text.storyName = 'Text';

export const Floats = () => (
  <div className="clearfix">
    <Spinner className="float-end" />
  </div>
);
Floats.storyName = 'Floats';

export const TextAlign = () => (
  <div className="text-center">
    <Spinner />
  </div>
);
TextAlign.storyName = 'TextAlign';

export const Small = () => (
  <div>
    <Spinner sm />
    &nbsp;
    <Spinner sm grow />
  </div>
);
Small.storyName = 'Small';

export const Large = () => (
  <div>
    <Spinner style={{ width: '3rem', height: '3rem' }} />
    &nbsp;
    <Spinner grow style={{ width: '3rem', height: '3rem' }} />
  </div>
);
Large.storyName = 'Large';

export const Buttons = () => (
  <div>
    <Button primary disabled>
      <Spinner sm />
    </Button>
    &nbsp;
    <Button primary disabled>
      <Spinner sm />
      Loading...
    </Button>
  </div>
);
Buttons.storyName = 'Buttons';

export const GrowButtons = () => (
  <div>
    <Button primary disabled>
      <Spinner grow sm />
    </Button>
    &nbsp;
    <Button primary disabled>
      <Spinner grow sm />
      Loading...
    </Button>
  </div>
);
GrowButtons.storyName = 'GrowButtons';
