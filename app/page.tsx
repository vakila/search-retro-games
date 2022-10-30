import Image from 'next/image';
import styles from './page.module.css';
import { getXataClient } from '../src/xata';
import Search from "./search";

const xata = getXataClient();

const GENRES = ["Role-playing (RPG)", "Point-and-click", "Puzzle", "Adventure", "Sport", "Card & Board Game", "Platform", "Racing", "Fighting", "Music", "Strategy", "Arcade", "Shooter", "Simulator", "Turn-based strategy (TBS)", "Real Time Strategy (RTS)", "Hack and slash/Beat 'em up", "Quiz/Trivia", "Tactical", "Pinball", "Indie", "Visual Novel"];

export default async function Home() {
  // const {records} = await xata.db.games
  //   .filter({ $exists: "totalRating"  })
  //   .sort("totalRating", "desc")
  //   .getPaginated();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Find retro games!
        </h1>

        <Search />

        {/* <div className={styles.grid}>
          {records.map(g => 
            <a href={g.url || ""} className={styles.card} >
              <h2>{g.name}</h2>
              <p>{g.console}</p>
            </a>
          )}
        </div> */}



        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://beta.nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
