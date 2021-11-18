import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import ListGroup, { NumberedGroup, Item } from '.';
import ActiveGroup, { LinkItem, ButtonItem } from './ActiveGroup';

export default {
  title: 'Components/ListGroup/ListGroups',
  parameters: {
    layout: 'centered',
    options: { showPanel: false },
  },
};

export const Base = () => (
  <ListGroup>
    <Item>An item</Item>
    <Item>A second item</Item>
    <Item>A third item</Item>
    <Item>A fourth item</Item>
    <Item>And a fifth one</Item>
  </ListGroup>
);
Base.storyName = 'Base';

export const Active = () => (
  <ListGroup>
    <Item active>An item</Item>
    <Item>A second item</Item>
    <Item>A third item</Item>
    <Item>A fourth item</Item>
    <Item>And a fifth one</Item>
  </ListGroup>
);
Active.storyName = 'Active';

export const Disabled = () => (
  <ListGroup>
    <Item disabled>An item</Item>
    <Item>A second item</Item>
    <Item>A third item</Item>
    <Item>A fourth item</Item>
    <Item>And a fifth one</Item>
  </ListGroup>
);
Disabled.storyName = 'Disabled';

export const Links = () => (
  <ActiveGroup>
    <LinkItem href="#">An item</LinkItem>
    <LinkItem href="#">A second item</LinkItem>
    <LinkItem href="#">A third item</LinkItem>
    <LinkItem href="#">A fourth item</LinkItem>
    <LinkItem href="#">And a fifth one</LinkItem>
  </ActiveGroup>
);
Links.storyName = 'Links';

export const Buttons = () => (
  <ActiveGroup>
    <ButtonItem>An item</ButtonItem>
    <ButtonItem>A second item</ButtonItem>
    <ButtonItem>A third item</ButtonItem>
    <ButtonItem>A fourth item</ButtonItem>
    <ButtonItem>And a fifth one</ButtonItem>
  </ActiveGroup>
);
Buttons.storyName = 'Buttons';

export const Flush = () => (
  <ListGroup flush>
    <Item>An item</Item>
    <Item>A second item</Item>
    <Item>A third item</Item>
    <Item>A fourth item</Item>
    <Item>And a fifth one</Item>
  </ListGroup>
);
Flush.storyName = 'Flush';

export const Numbered = () => (
  <NumberedGroup>
    <Item>An item</Item>
    <Item>A second item</Item>
    <Item>A third item</Item>
    <Item>A fourth item</Item>
    <Item>And a fifth one</Item>
  </NumberedGroup>
);
Numbered.storyName = 'Numbered';

export const Horizontal = () => (
  <div>
    <ListGroup horizontal>
      <Item>An item</Item>
      <Item>A second item</Item>
      <Item>A third item</Item>
    </ListGroup>
    <ListGroup horizontal="sm">
      <Item>An item</Item>
      <Item>A second item</Item>
      <Item>A third item</Item>
    </ListGroup>
    <ListGroup horizontal="md">
      <Item>An item</Item>
      <Item>A second item</Item>
      <Item>A third item</Item>
    </ListGroup>
    <ListGroup horizontal="lg">
      <Item>An item</Item>
      <Item>A second item</Item>
      <Item>A third item</Item>
    </ListGroup>
    <ListGroup horizontal="xl">
      <Item>An item</Item>
      <Item>A second item</Item>
      <Item>A third item</Item>
    </ListGroup>
    <ListGroup horizontal="xxl">
      <Item>An item</Item>
      <Item>A second item</Item>
      <Item>A third item</Item>
    </ListGroup>
  </div>
);
Horizontal.storyName = 'Horizontal';
