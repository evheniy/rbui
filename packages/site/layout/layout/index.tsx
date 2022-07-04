import React, { FC, PropsWithChildren, useEffect } from 'react';

import { Helmet } from 'react-helmet';

import cn from 'classnames';

import { Header } from '../header';
import { Footer } from '../footer';

import styles from './styles.scss';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    document.getElementById('root')?.classList.add(styles['cover-container'], 'd-flex', 'w-100', 'h-100', 'p-3', 'mx-auto', 'flex-column');
  }, []);

  return (
    <>
      <Helmet>
        <html className={cn('h-100')} lang="en" />
        <body className={cn('d-flex', 'h-100', 'text-center', 'text-white', 'bg-dark')} />
      </Helmet>

      <Header />

      <main role="main" className={cn('px-3')}>
        {children}
      </main>

      <Footer />
    </>
  );
};
