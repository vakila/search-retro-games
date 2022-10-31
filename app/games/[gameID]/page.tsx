import styles from '../../page.module.css';
import Link from 'next/link';
import { getXataClient } from "../../../src/xata";
import { getConsoleName } from "../../../src/consoles";


const xata = getXataClient();

export default async function Page({params}: {
    params: {gameID: string}
}) {
    console.log("GAME", params.gameID);

    
    const game = await xata.db.games.read(params.gameID);
    console.log(game);
    
    
    return (
    <div className={styles.container}>
        <main className={styles.main}>
            <Link href="/" className={styles.link} style={{alignSelf: "flex-start",paddingLeft:"2rem",paddingBottom:"0.5em"}}>&lt;&lt; Back to Search</Link>
            {!game ? (<h1 className={styles.title}>Oops! Game "{params.gameID}" not found</h1>) : (
                <>
                    <h1 className={styles.title}>{game.name}</h1>
                    <div className={styles.container} style={{display: "block", marginTop: "1em"}} >
                        <div style={{display: "flex", gap: "1.2rem"}}>
                            {game.cover && <p><img src={game.cover.replace("t_thumb", "t_cover_big")} /></p>}
                            {game.summary && <p style={{fontSize: "1.2rem"}}>{game.summary}</p>}
                        </div>
                        {game.firstReleaseDate && <p>Released: {new Date(game.firstReleaseDate).toDateString()}</p>}
                        {game.console && <p>Console: {getConsoleName(game.console)}</p>}
                        {game.genres && <p>Genres: {game.genres.join(", ")}</p>}
                        {game.url && <a className={styles.link} href={game.url}  >View on IGDB &gt;&gt;</a>}
                    </div>  
                </>  
            )}
        </main>
    </div>);



}
