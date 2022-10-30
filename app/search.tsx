'use client';

import Image from 'next/image';
import styles from '../app/page.module.css';
import { use, useState, useEffect } from 'react';
import * as debounce from 'lodash.debounce';

const searchGames = async (term, callback) => {
  let url = `/api/search?term=${term}`;
  // if (consoles && consoles.length) url += CONSOLES.filter((c,i) => consoles[i]).map(c => `&console=${c}`).join("");
  const response = await fetch(url);

  return callback(await response.json());
}

const debouncedSearch = debounce(searchGames, 500);

export default function Search() {
  const [searched, setSearched] = useState("");
  const [games, setGames] = useState([])
  // const results = searched ? use(getSearchData(searched)) : [];


  useEffect(() => {
    if (searched) {
      debouncedSearch(searched, 
        results => setGames(results.map(r => r.record)));
    }
    console.log(games.length);
  }, [searched]);


  return (
    <div className={styles.container}>

      <input type="search" value={searched}
       onChange={(e) => setSearched(e.target.value)} 
       />
        
        <div className={styles.grid} >
        {games.map(({url, name, console, id}: {url: string, name: string, console: string, id: string}) => 
            <a key={id} href={url || ""} className={styles.card} >
              <h2>{name}</h2>
              <p>{console}</p>
            </a>
          )}
      </div>
    </div>

  )
}

// function SearchResults({results}: {results: any[]}) {
//   // if (!term) return null;
//   // return null;

//   return (<div className={styles.grid} >
//         {results.map(({url, name, console}: {url: string, name: string, console: string}) => 
//             <a key={name} href={url || ""} className={styles.card} >
//               <h2>{name}</h2>
//               <p>{console}</p>
//             </a>
//           )}
//       </div>)
        
// }


