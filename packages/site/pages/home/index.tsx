import React from 'react';

import { Helmet } from 'react-helmet';

import cn from 'classnames';

import { Layout } from '@rbui/site/layout';

export const HomePage = () => (
  <Layout>
    <Helmet>
      <title>RBUI</title>
    </Helmet>

    <h1>React Bootstrap UI</h1>
    <p className={cn('lead')}>Bootstrap functionality with React and TypeScript</p>
  </Layout>
);
