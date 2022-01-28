import React from "react";
import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
}

export const Meta: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="ico" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};
