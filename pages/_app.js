import Navbar from "../components/navbar";
import "../styles/globals.css";
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <p>
          Copyright © 2022 Benjamin Moore. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default MyApp;
