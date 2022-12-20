import Head from 'next/head';
import React from 'react';

interface ITitleProps {
  title: string;
}

const Seo = ({ title }: ITitleProps) => {
  return (
    <Head>
      <title>{`${title} | next Movies`}</title>
    </Head>
  );
};

export default Seo;
