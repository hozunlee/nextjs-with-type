import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Home from '../pages';
import NavBar from './NavBar';
import Seo from './Seo';

const Layout = ({ children }) => {
  const obj = { '/': 'Home', '/about': 'About' };
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
