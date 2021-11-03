import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Pagination, { Item, Link } from '.';

export default {
  title: 'Components/Pagination/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
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
  children: 'Text',
  href: '#',
};
