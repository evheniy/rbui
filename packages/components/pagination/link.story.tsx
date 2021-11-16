import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Pagination, { Item } from '.';
import { Link } from './Item';

export default {
  title: 'Components/Pagination/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
  argTypes: {
    children: {
      description: 'Children',
      control: { type: 'text' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    className: {
      description: 'Default class',
      control: { type: 'text' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    href: {
      description: 'Link href',
      control: { type: 'text' },
      type: {
        required: false,
      },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <Pagination>
    <Item custom>
      <Link {...args} />
    </Item>
  </Pagination>
);

export const LinkStory = Template.bind({});
LinkStory.storyName = 'Link';
LinkStory.args = {
  // Base
  children: 'Text',
  className: '',
  href: '#',
};
