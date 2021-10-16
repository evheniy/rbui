import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Button, { Input, Link } from '.';

export default {
  title: 'Components/Button/Buttons',
};

export const Style = () => (
  <div className="d-grid gap-2 d-md-flex">
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button success>Success</Button>
    <Button danger>Danger</Button>
    <Button warning>Warning</Button>
    <Button info>Info</Button>
    <Button light>Light</Button>
    <Button dark>Dark</Button>
    <Button link>Link</Button>
  </div>
);
Style.storyName = 'Style';

export const Outline = () => (
  <div className="d-grid gap-2 d-md-flex">
    <Button primary outline>Primary</Button>
    <Button secondary outline>Secondary</Button>
    <Button success outline>Success</Button>
    <Button danger outline>Danger</Button>
    <Button warning outline>Warning</Button>
    <Button info outline>Info</Button>
    <Button light outline>Light</Button>
    <Button dark outline>Dark</Button>
    <Button link outline>Link</Button>
  </div>
);
Outline.storyName = 'Outline';

export const Size = () => (
  <div className="d-grid gap-2 d-md-flex">
    <Button primary lg>Large button</Button>
    <Button primary sm>Small button</Button>
  </div>
);
Size.storyName = 'Size';

export const Tags = () => (
  <div className="d-grid gap-2 d-md-flex">
    <Button primary>Button</Button>
    <Input primary value="Input" />
    <Link
      href="https://skazkajs.org/"
      primary
      onClick={event => event.preventDefault()}
    >
      Link
    </Link>
  </div>
);
Tags.storyName = 'Tags';

export const Disabled = () => (
  <div className="d-grid gap-2 d-md-flex">
    <Button primary disabled>Button</Button>
    <Input primary disabled value="Input" />
    <Link
      href="https://skazkajs.org/"
      primary
      onClick={event => event.preventDefault()}
      disabled
    >
      Link
    </Link>
  </div>
);
Disabled.storyName = 'Disabled';

export const Toggle = () => (
  <div className="d-grid gap-2 d-md-flex">
    <Button primary toggle>Primary</Button>
    <Button secondary toggle>Secondary</Button>
    <Button success toggle>Success</Button>
    <Button danger toggle>Danger</Button>
    <Button warning toggle>Warning</Button>
    <Button info toggle>Info</Button>
    <Button light toggle>Light</Button>
    <Button dark toggle>Dark</Button>
    <Button link toggle>Link</Button>
  </div>
);
Toggle.storyName = 'Toggle';
