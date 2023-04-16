import { FC, ReactNode } from 'react';

import Head from 'next/head';

import { Navbar } from '../ui';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
  children: ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Alejandro Rojas" />
        <meta
          name="description"
          content={`Información sobre el pókemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pókemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />

      </Head>

      <Navbar />

      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
