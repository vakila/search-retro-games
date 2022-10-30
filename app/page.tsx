import Image from 'next/image';
import styles from './page.module.css';
import { getXataClient } from '../src/xata';
import Search from "./search";

// const xata = getXataClient();

const GENRES = ["Role-playing (RPG)", "Point-and-click", "Puzzle", "Adventure", "Sport", "Card & Board Game", "Platform", "Racing", "Fighting", "Music", "Strategy", "Arcade", "Shooter", "Simulator", "Turn-based strategy (TBS)", "Real Time Strategy (RTS)", "Hack and slash/Beat 'em up", "Quiz/Trivia", "Tactical", "Pinball", "Indie", "Visual Novel"];

export default async function Home() {

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
