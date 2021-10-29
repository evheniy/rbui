import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Button from '@rbui/components/button';

import ButtonGroup, { ButtonToolbar } from '.';

export default {
  title: 'Components/ButtonGroup/ButtonToolbar',
  component: ButtonToolbar,
  parameters: { options: { showPanel: true } },
  argTypes: {
    'aria-label': {
      description: 'Text for screen readers',
      control: { type: 'text' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: 'ButtonGroup',
        },
      },
    },
  },
} as ComponentMeta<typeof ButtonToolbar>;

const Template: ComponentStory<typeof ButtonToolbar> = args => (
  <ButtonToolbar {...args}>
    <ButtonGroup aria-label="First group" className="me-2">
      <Button primary>1</Button>
      <Button primary>2</Button>
      <Button primary>3</Button>
      <Button primary>4</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Second group" className="me-2">
      <Button secondary>5</Button>
      <Button secondary>6</Button>
      <Button secondary>7</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Third group">
      <Button info>8</Button>
    </ButtonGroup>
  </ButtonToolbar>

);

export const CloseButtonStory = Template.bind({});
CloseButtonStory.storyName = 'ButtonToolbar';
CloseButtonStory.args = {
  'aria-label': 'ButtonToolbar',
};
