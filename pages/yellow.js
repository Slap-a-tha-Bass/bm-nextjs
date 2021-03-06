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

export default function Yellow({ colors }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (colors) {
      setLoading(false);
    }
  }, [colors]);
  if (loading) return <Loader />;
  const [colorName] = Object.entries(colors);
  const colorNames = Object.entries(colorName[1]);
  const yellow = colorNames.filter((color) => color[1].family === "Yellow");
  return (
    <div className={styles.container}>
      <Head>
        <title>Yellows by Benjamin Moores</title>
        <meta name="description" content="Sort through and copy some of your favorite colors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {yellow &&
            yellow.map((color, index) => {
              const bmColor = color[1];
              return (
                <Card
                  name={bmColor.name}
                  hex={bmColor.hex}
                  key={`${bmColor.hex}-${index}`}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}
