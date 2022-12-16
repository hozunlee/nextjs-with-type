import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Home from '../pages';
import NavBar from './NavBar';
import Seo from './Seo';

const obj = { '/': 'Home', '/about': 'About' };

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Seo title={obj[router.pathname]} />
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
