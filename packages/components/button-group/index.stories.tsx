/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Button, { Link } from '@rbui/components/button';

import ButtonGroup from '.';

export default {
  title: 'Components/ButtonGroup/ButtonGroups',
  parameters: {
    layout: 'centered',
    options: { showPanel: false },
  },
};

export const Base = () => (
  <ButtonGroup>
    <Button primary>Left</Button>
    <Button primary>Middle</Button>
    <Button primary>Right</Button>
  </ButtonGroup>
);
Base.storyName = 'Base';

export const Links = () => (
  <ButtonGroup>
    <Link primary href="#" active onClick={event => event.preventDefault()}>Active link</Link>
    <Link primary href="#" onClick={event => event.preventDefault()}>Link</Link>
    <Link primary href="#" onClick={event => event.preventDefault()}>Link</Link>
  </ButtonGroup>
);
Links.storyName = 'Links';

export const Styles = () => (
  <ButtonGroup>
    <Button danger>Left</Button>
    <Button warning>Middle</Button>
    <Button success>Right</Button>
  </ButtonGroup>
);
Styles.storyName = 'Styles';

export const Outlined = () => (
  <ButtonGroup>
    <Button primary outline>Left</Button>
    <Button primary outline>Middle</Button>
    <Button primary outline>Right</Button>
  </ButtonGroup>
);
Outlined.storyName = 'Outlined';
