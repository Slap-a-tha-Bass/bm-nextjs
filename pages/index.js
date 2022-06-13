import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colors by Benjamin Moore</title>
        <meta
          name="description"
          content="Sort through and copy some of your favorite colors"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.bgTitle}>
            <h1 className={styles.title}>Colors by Benjamin Moore</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
