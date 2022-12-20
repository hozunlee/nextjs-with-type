import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Home from '../pages';
import NavBar from './NavBar';
import Seo from './Seo';

interface ILayoutProps {
  children: React.ReactNode;
}
type tPathObj = {
  [key: string]: string;
};

const Layout = ({ children }: ILayoutProps) => {
  const pathObj: tPathObj = { '/': 'Home', '/about': 'About' };
  const router = useRouter();

  return (
    <>
      <Seo title={pathObj[router.pathname]} />
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
