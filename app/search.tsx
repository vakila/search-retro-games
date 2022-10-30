'use client';

import Image from 'next/image';
import styles from '../app/page.module.css';
import { use, useState, useEffect } from 'react';
import * as debounce from 'lodash.debounce';
import { CONSOLES, GENRES } from "../src/constants";
import type { Games } from '../src/xata';



function getConsoleName(id: string) {
  return CONSOLES.filter(c => c.id === id)[0].name;
}

const searchGames = async (term: string, consoles: boolean[], genres: boolean[], callback: ({ }) => void) => {
  let url = `/api/search?term=${term}`;
  if (consoles && consoles.length) url += CONSOLES.filter((c, i) => consoles[i]).map(c => `&console=${c.id}`).join("");
  const response = await fetch(url);

  return callback(await response.json());
}

const debouncedSearch = debounce(searchGames, 500);

export default function Search() {
  const [searched, setSearched] = useState("");
  const [games, setGames] = useState<Games[]>([])
  const [consoles, setConsoles] = useState(CONSOLES.map(c => false));
  const [genres, setGenres] = useState(GENRES.map(g => false));

  // useEffect(() => {
  //   setConsoles(CONSOLES.map(c => false));
  //   setGenres(GENRES.map(g => false))
  // }, [searched])

  useEffect(() => {
    if (searched) {
      debouncedSearch(searched, consoles, genres,
        (results: { record: Games }[]) => setGames(results.map(r => r.record)));
    }
    console.log(games.length);
  }, [searched, consoles, genres]);

  function toggleConsole(i: number) {
    setConsoles(consoles.map((v, ci) => ci === i ? !v : v));
  }

  function toggleGenre(i: number) {
    setGenres(genres.map((v, ci) => ci === i ? !v : v));
  }

  return (
    <div className={styles.container} style={{ display: "flex" , width: "80%"}}>

      <aside id="sidebar" style={{ paddingTop: "2rem" }} >
        <input type="search" value={searched}
          onChange={(e) => setSearched(e.target.value)}
        />
        <div id="filters" >
          <Checkboxes title="Console" options={CONSOLES.map(c => c.name)} onChange={toggleConsole} />
          <Checkboxes title="Genre" options={GENRES} onChange={toggleGenre} />
        </div>

      </aside>

      <div className={styles.container} style={{width:"70%"}} >
        {games.map(({ url, name, console, id , genres}: Games) =>
          <a key={id} href={url || ""}  >
            <h2>{name}</h2>
            <p>{console && getConsoleName(console)}</p>
            <p>{genres && genres.length && genres.map(g => JSON.parse(g).name).join(", ")}</p>
          </a>
        )}
      </div>
    </div>

  )
}



function Checkboxes({ title, onChange, options }) {
  return (
    <label
      style={{
        display: "block",
        marginTop: "1em"
      }}
    >
      <h4 style={{marginBottom: 0}}>{title}</h4>
      <form style={{ display: "flex", flexDirection: "column" }}>
        {options.map((value, i) => (
          <div key={value}>
            <input
              type="checkbox"
              id={value}
              name="checkbox"
              value={value}
              // defaultChecked
              onChange={() => onChange(i)}
            />
            <label htmlFor={value}>{value}</label>
          </div>
        ))}
      </form>
    </label>
  );
}