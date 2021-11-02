import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Button from '@rbui/components/button';

import Badge from '.';

export default {
  title: 'Components/Badges/Badges',
  parameters: {
    layout: 'centered',
    options: { showPanel: false },
  },
};

export const Base = () => (
  <div>
    <h1>
      Example heading
      &nbsp;
      <Badge secondary>New</Badge>
    </h1>
    <h2>
      Example heading
      &nbsp;
      <Badge secondary>New</Badge>
    </h2>
    <h3>
      Example heading
      &nbsp;
      <Badge secondary>New</Badge>
    </h3>
    <h4>
      Example heading
      &nbsp;
      <Badge secondary>New</Badge>
    </h4>
    <h5>
      Example heading
      &nbsp;
      <Badge secondary>New</Badge>
    </h5>
    <h6>
      Example heading
      &nbsp;
      <Badge secondary>New</Badge>
    </h6>

  </div>
);
Base.storyName = 'Base';

export const Buttons = () => (
  <Button primary>
    Notifications
    &nbsp;
    <Badge secondary>4</Badge>
  </Button>
);
Buttons.storyName = 'Buttons';

export const Positioned = () => (
  <div>
    <div>
      <Button primary className="position-relative">
        Inbox
        <Badge pill danger className="position-absolute top-0 start-100 translate-middle">
          99+
          <span className="visually-hidden">unread messages</span>
        </Badge>
      </Button>
    </div>
    &nbsp;
    <div>
      <Button primary className="position-relative">
        Profile
        <Badge circle danger className="position-absolute top-0 start-100 translate-middle p-2 border border-light">
          <span className="visually-hidden">New alerts</span>
        </Badge>
      </Button>
    </div>
  </div>
);
Positioned.storyName = 'Positioned';

export const Background = () => (
  <div>
    <Badge primary>Primary</Badge>
    &nbsp;
    <Badge secondary>Secondary</Badge>
    &nbsp;
    <Badge success>Success</Badge>
    &nbsp;
    <Badge danger>Danger</Badge>
    &nbsp;
    <Badge warning>Warning</Badge>
    &nbsp;
    <Badge info>Info</Badge>
    &nbsp;
    <Badge light>Light</Badge>
    &nbsp;
    <Badge dark>Dark</Badge>
  </div>
);
Background.storyName = 'Background';

export const Pill = () => (
  <div>
    <Badge primary pill>Primary</Badge>
    &nbsp;
    <Badge secondary pill>Secondary</Badge>
    &nbsp;
    <Badge success pill>Success</Badge>
    &nbsp;
    <Badge danger pill>Danger</Badge>
    &nbsp;
    <Badge warning pill>Warning</Badge>
    &nbsp;
    <Badge info pill>Info</Badge>
    &nbsp;
    <Badge light pill>Light</Badge>
    &nbsp;
    <Badge dark pill>Dark</Badge>
  </div>
);
Pill.storyName = 'Pill';
