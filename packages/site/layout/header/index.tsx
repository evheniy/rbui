import React from 'react';

import cn from 'classnames';

import github from 'bootstrap-icons/icons/github.svg';

import styles from './styles.scss';

export const Header = () => (
  <header className="mb-auto">
    <div>
      <h3 className={cn('float-md-start', 'mb-0')}>Cover</h3>
      <nav className={cn('nav', styles['nav-masthead'], 'justify-content-center', 'float-md-end')}>
        <a className={cn(styles['nav-link'], 'fw-bold', 'py-1', 'px-0')} href="https://sb.rbui.tools/">Components</a>
        <a className={cn(styles['nav-link'], 'fw-bold', 'py-1', 'px-0')} href="https://github.com/evheniy/rbui">
          <span
            className={cn(styles.github)}
            dangerouslySetInnerHTML={{ __html: github }}
          />
          Github
        </a>
      </nav>
    </div>
  </header>
);
