import Head from "next/head";
import React from "react";
import Link from "next/link";
import styles from "src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netlify test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">Main</Link>
        <Link href="/hero">Hero</Link>
        <Link href="/admin">Admin</Link>
      </main>
    </div>
  );
}
