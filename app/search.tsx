'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { use, useState, useEffect } from 'react';


async function getSearchData(term: string) {
  if (term ) {
    const res = await fetch('/api/hello');
    // const res = await fetch(`/api/search?query=${term}`) 
    return res.json();
  } else {
    return [];
  }
}

export default function Search() {
  const [searched, setSearched] = useState("batman");

  return (
    <div className={styles.container}>

      <input type="search" value={searched}
       onChange={(e) => console.log(e.target.value)} 
       />
        
      <SearchResults term={searched} />
    </div>

  )
}

function SearchResults({term}: {term: string}) {
  const results = use(getSearchData(term));

  return (<div className={styles.grid} >
        {results.map(({url, name, console}: {url: string, name: string, console: string}) => 
            <a href={url || ""} className={styles.card} >
              <h2>{name}</h2>
              <p>{console}</p>
            </a>
          )}
      </div>)
}


