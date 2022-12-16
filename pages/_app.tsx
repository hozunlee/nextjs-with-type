// _app.js는 하나의 blueprint
// 어떻게 페이지가 있어야 하는지, 어떤 컴포넌트가 어떤 페이지에 있어야하는지

import { Component } from 'react';
import Layout from '../components/Layout';

// props는 nextJS 프레임워크가 정해놓은 것임

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
