import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Loader from "../components/loader";
import Card from "../components/card";

export async function getStaticProps() {
  const res = await fetch("https://www.benjaminmoore.com/api/colors");
  const colors = await res.json();
  return {
    props: {
      colors,
    },
  };
}

export default function Neutral({ colors }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (colors) {
      setLoading(false);
    }
  }, [colors]);
  if (loading) return <Loader />;
  const [colorName] = Object.entries(colors);
  const colorNames = Object.entries(colorName[1]);
  const neutral = colorNames.filter((color) => color[1].family === "Neutral");
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {neutral &&
            neutral.map((color, index) => {
              const bmColor = color[1];
              return (
                <Card name={bmColor.name} hex={bmColor.hex} key={bmColor.hex} />
              );
            })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
