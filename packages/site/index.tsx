import React from 'react';

import { Helmet } from 'react-helmet';

import cn from 'classnames';

import github from 'bootstrap-icons/icons/github.svg';

import styles from './styles.scss';

export const Site = () => (
  <div className={cn(styles['cover-container'], 'd-flex h-100 p-3 mx-auto flex-column text-center')}>
    <Helmet>
      <title>RBUI</title>
    </Helmet>
    <header className={cn(styles.masthead, 'mb-auto')}>
      <div className={cn('inner')}>
        <h3 className={cn(styles['masthead-brand'])}>RBUI</h3>
        <nav className={cn(styles['nav-masthead'], 'nav justify-content-center')}>
          <a className={cn(styles['nav-link'])} href="https://sb.rbui.tools/">Components</a>
          <a className={cn(styles['nav-link'])} href="https://github.com/evheniy/rbui">
            <div
              className={cn(styles.github)}
              dangerouslySetInnerHTML={{ __html: github }}
            />
            Github
          </a>
        </nav>
      </div>
    </header>

    <main role="main" className={cn(styles.cover, 'inner')}>
      <h1 className={cn(styles['cover-heading'])}>React Bootstrap UI</h1>
      <p className={cn('lead')}>Bootstrap functionality with React and TypeScript</p>
    </main>

    <footer className={cn(styles.mastfoot, 'mt-auto')}>
      <div className={cn('inner')}>
        <p>
          Copyright © 2022
          {' '}
          <a href="https://github.com/evheniy/">Evheniy Bystrov</a>
        </p>
      </div>
    </footer>
  </div>
);
