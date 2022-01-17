/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { ComponentStory } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import Pagination, { Item } from '.';
import { Link, Text } from './Item';

export default {
  title: 'Components/Pagination/Examples',
  parameters: {
    layout: 'centered',
    options: { showPanel: false },
  },
};

export const Overview = () => (
  <Pagination aria-label="Page navigation example">
    <Item disabled>Previous</Item>
    <Item active>1</Item>
    <Item href="#">2</Item>
    <Item href="#">3</Item>
    <Item href="#">Next</Item>
  </Pagination>
);
Overview.storyName = 'Overview';

export const Icons = () => (
  <Pagination aria-label="Page navigation example">
    <Item custom>
      <Link href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </Link>
    </Item>
    <Item href="#">1</Item>
    <Item href="#">2</Item>
    <Item href="#">3</Item>
    <Item custom>
      <Link href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </Link>
    </Item>
  </Pagination>
);
Icons.storyName = 'Icons';

export const State = () => (
  <Pagination aria-label="Page navigation example">
    <Item disabled>Previous</Item>
    <Item active>1</Item>
    <Item href="#">2</Item>
    <Item href="#">3</Item>
    <Item href="#">Next</Item>
  </Pagination>
);
State.storyName = 'State';

export const Custom = () => (
  <Pagination aria-label="Page navigation example">
    <Item custom disabled>
      <Text>Previous</Text>
    </Item>
    <Item custom active>
      <Text>1</Text>
    </Item>
    <Item custom>
      <Link href="#">2</Link>
    </Item>
    <Item custom>
      <Link href="#">3</Link>
    </Item>
    <Item custom>
      <Link href="#">Next</Link>
    </Item>
  </Pagination>
);
Custom.storyName = 'Custom';

export const Large = () => (
  <Pagination lg aria-label="Page navigation example">
    <Item disabled>Previous</Item>
    <Item active>1</Item>
    <Item href="#">2</Item>
    <Item href="#">3</Item>
    <Item href="#">Next</Item>
  </Pagination>
);
Large.storyName = 'Large';

export const Small = () => (
  <Pagination sm aria-label="Page navigation example">
    <Item disabled>Previous</Item>
    <Item active>1</Item>
    <Item href="#">2</Item>
    <Item href="#">3</Item>
    <Item href="#">Next</Item>
  </Pagination>
);
Small.storyName = 'Small';

export const Center = () => (
  <Pagination aria-label="Page navigation example" className="justify-content-center">
    <Item disabled>Previous</Item>
    <Item active>1</Item>
    <Item href="#">2</Item>
    <Item href="#">3</Item>
    <Item href="#">Next</Item>
  </Pagination>
);
Center.storyName = 'Center';

export const Right: ComponentStory<typeof Pagination> = () => (
  <div style={{ margin: '20px 20px 40px 0' }}>
    <Pagination aria-label="Page navigation example" className="justify-content-end">
      <Item disabled>Previous</Item>
      <Item active>1</Item>
      <Item href="#">2</Item>
      <Item href="#">3</Item>
      <Item href="#">Next</Item>
    </Pagination>
  </div>
);

Right.storyName = 'Right';
Right.parameters = {
  layout: 'default',
};
