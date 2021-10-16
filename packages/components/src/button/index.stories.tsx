import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Button, { Input, Link } from '.';

export default {
  title: 'Components/Button/Buttons',
};

const style: React.CSSProperties = {
  // overflow: 'hidden',
  // position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonStyle: React.CSSProperties = {
  margin: 10,
};

export const Style = () => (
  <div style={style}>
    <Button primary style={buttonStyle}>Primary</Button>
    <Button secondary style={buttonStyle}>Secondary</Button>
    <Button success style={buttonStyle}>Success</Button>
    <Button danger style={buttonStyle}>Danger</Button>
    <Button warning style={buttonStyle}>Warning</Button>
    <Button info style={buttonStyle}>Info</Button>
    <Button light style={buttonStyle}>Light</Button>
    <Button dark style={buttonStyle}>Dark</Button>
    <Button link style={buttonStyle}>Link</Button>
  </div>
);
Style.storyName = 'Style';

export const Outline = () => (
  <div style={style}>
    <Button primary outline style={buttonStyle}>Primary</Button>
    <Button secondary outline style={buttonStyle}>Secondary</Button>
    <Button success outline style={buttonStyle}>Success</Button>
    <Button danger outline style={buttonStyle}>Danger</Button>
    <Button warning outline style={buttonStyle}>Warning</Button>
    <Button info outline style={buttonStyle}>Info</Button>
    <Button light outline style={buttonStyle}>Light</Button>
    <Button dark outline style={buttonStyle}>Dark</Button>
    <Button link outline style={buttonStyle}>Link</Button>
  </div>
);
Outline.storyName = 'Outline';

export const Tags = () => (
  <div style={style}>
    <Button primary style={buttonStyle}>Button</Button>
    <Input primary style={buttonStyle} value="Input" />
    <Link
      href="https://skazkajs.org/"
      primary
      style={buttonStyle}
      onClick={event => event.preventDefault()}
    >
      Link
    </Link>
  </div>
);
Tags.storyName = 'Tags';

export const Disabled = () => (
  <div style={style}>
    <Button primary disabled style={buttonStyle}>Button</Button>
    <Input primary disabled style={buttonStyle} value="Input" />
    <Link
      href="https://skazkajs.org/"
      primary
      style={buttonStyle}
      onClick={event => event.preventDefault()}
      disabled
    >
      Link
    </Link>
  </div>
);
Disabled.storyName = 'Disabled';

export const Size = () => (
  <div style={style}>
    <Button primary lg style={buttonStyle}>Large button</Button>
    <Button primary sm style={buttonStyle}>Small button</Button>
  </div>
);
Size.storyName = 'Size';
