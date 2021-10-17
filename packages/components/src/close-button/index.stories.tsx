import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import CloseButton from '.';

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = args => <CloseButton {...args} />;

export const CloseButtonStory = Template.bind({});
CloseButtonStory.storyName = 'CloseButton';
CloseButtonStory.args = {
  'aria-label': 'Close',
  disabled: false,
};
