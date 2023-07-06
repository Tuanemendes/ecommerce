import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - ArtW' : 'ArtW'}</title>
        <meta name="description" content="Ecommerce Art"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-14 items-center px-6 justify-between shadow-md bg-brow-coffee">
            <Link href="/" className="text-lg font-bold text-grey-light">
              ArtW
            </Link>
            <div>
              <Link href="/cart" className="p-2 text-grey-light">
                Card
              </Link>
              <Link href="/login" className="p-2 text-grey-light">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-5">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-belge-milk">
          <p>Copyright @ 2023 ArtW by Tuane Mendes</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
