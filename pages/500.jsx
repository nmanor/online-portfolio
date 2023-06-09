import React from 'react';
import Head from 'next/head';
import styles from '../styles/Error.module.css';

export default function Error() {
  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>
          Error
          <span>.</span>
        </h1>
        <p>Please try again later</p>
      </main>
    </>
  );
}
