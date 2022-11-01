import Image from "next/image";
import styles from "./page.module.css";
import Search from "./search";

import { getXataClient } from "../util/xata";

const xata = getXataClient();

export default async function Home() {
  const {
    aggs: { totalCount },
  } = await xata.db.games.aggregate({
    totalCount: {
      count: "*",
    },
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Search {totalCount} retro games!</h1>

        <Search />
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a href="https://xata.io" target="_blank" rel="noopener noreferrer">
          <span className={styles.logo}>
            <Image src="/xata.svg" alt="Xata logo" width={80} height={20} />
          </span>
        </a>
      </footer>
    </div>
  );
}
