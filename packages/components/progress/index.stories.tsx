import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Progress, { Bar } from '.';

export default {
  title: 'Components/Progress/ProgressBar',
  parameters: { options: { showPanel: false } },
};

export const ProgressBase = () => (
  <div>
    <Progress />
    &nbsp;
    <Progress now={25} />
    &nbsp;
    <Progress now={50} />
    &nbsp;
    <Progress now={75} />
    &nbsp;
    <Progress now={100} />
  </div>
);
ProgressBase.storyName = 'ProgressBase';

export const ProgressBarBase = () => (
  <div>
    <Progress>
      <Bar />
    </Progress>
    &nbsp;
    <Progress>
      <Bar now={25} />
    </Progress>
    &nbsp;
    <Progress>
      <Bar now={50} />
    </Progress>
    &nbsp;
    <Progress>
      <Bar now={75} />
    </Progress>
    &nbsp;
    <Progress>
      <Bar now={100} />
    </Progress>
  </div>
);
ProgressBarBase.storyName = 'ProgressBarBase';

export const Labels = () => (
  <Progress now={25} label />
);
Labels.storyName = 'Labels';

export const Height = () => (
  <div>
    <Progress now={25} style={{ height: 1 }} />
    &nbsp;
    <Progress style={{ height: 20 }}>
      <Bar now={25} />
    </Progress>
  </div>
);
Height.storyName = 'Height';

export const Backgrounds = () => (
  <div>
    <Progress now={25} success />
    &nbsp;
    <Progress now={50} info />
    &nbsp;
    <Progress now={75} warning />
    &nbsp;
    <Progress now={100} danger />
  </div>
);
Backgrounds.storyName = 'Backgrounds';

export const MultipleBars = () => (
  <Progress>
    <Bar now={15} />
    <Bar now={30} success />
    <Bar now={20} info />
  </Progress>
);
MultipleBars.storyName = 'MultipleBars';

export const Striped = () => (
  <div>
    <Progress now={10} striped />
    &nbsp;
    <Progress now={25} striped success />
    &nbsp;
    <Progress now={50} striped info />
    &nbsp;
    <Progress now={75} striped warning />
    &nbsp;
    <Progress now={100} striped danger />
  </div>
);
Striped.storyName = 'Striped';

export const Animated = () => (
  <div>
    <Progress now={10} striped animated />
    &nbsp;
    <Progress now={25} striped animated success />
    &nbsp;
    <Progress now={50} striped animated info />
    &nbsp;
    <Progress now={75} striped animated warning />
    &nbsp;
    <Progress now={100} striped animated danger />
  </div>
);
Animated.storyName = 'Animated';
