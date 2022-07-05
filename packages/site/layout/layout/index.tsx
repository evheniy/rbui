import React, { FC, PropsWithChildren, useEffect } from 'react';

import { Helmet } from 'react-helmet';

import cn from 'classnames';

import { Header } from '../header';
import { Footer } from '../footer';

import styles from './styles.scss';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    document.getElementById('root')?.classList.add(styles['cover-container']);
  }, []);

  return (
    <>
      <Header />

      <main role="main" className={cn('px-3')}>
        {children}
      </main>

      <Footer />
    </>
  );
};
