import React from 'react';
import ReactDOM from 'react-dom';

import { Helmet } from 'react-helmet';

import cn from 'classnames';

import 'bootstrap/dist/css/bootstrap.css';

import styles from './styles.scss';

const App = () => (
  <div className={cn(styles['cover-container'], 'd-flex h-100 p-3 mx-auto flex-column text-center')}>
    <Helmet>
      <title>RBUI</title>
    </Helmet>
    <header className={cn(styles.masthead, 'mb-auto')}>
      <div className={cn('inner')}>
        <h3 className={cn(styles['masthead-brand'])}>RBUI</h3>
        <nav className={cn(styles['nav-masthead'], 'nav justify-content-center')}>
          <a className={cn(styles['nav-link'])} href="https://sb.rbui.tools/">Components</a>
          <a className={cn(styles['nav-link'])} href="https://github.com/evheniy/rbui">Github</a>
        </nav>
      </div>
    </header>

    <main role="main" className={cn(styles.cover, 'inner')}>
      <h1 className={cn(styles['cover-heading'])}>React Bootstrap UI</h1>
      <p className={cn('lead')}>Use full Bootstrap css functionality with React and TypeScript</p>
    </main>

    <footer className={cn(styles.mastfoot, 'mt-auto')}>
      <div className={cn('inner')}>
        <p>
          Copyright © 2020 RBUI
        </p>
      </div>
    </footer>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
