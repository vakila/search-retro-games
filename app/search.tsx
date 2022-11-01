'use client';

import Image from 'next/image';
import styles from '../app/page.module.css';
import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import debounce from 'lodash.debounce';
import { CONSOLES, getConsoleName } from "../util/consoles";
import type { Games } from "../util/xata";


const searchGames = async (
  term: string,
  consoles: boolean[],
  callback: ({ games, elapsed }: { games: Games[]; elapsed: number }) => void
) => {
  let url = `/api/search?term=${term}`;
  if (consoles && consoles.length)
    url += CONSOLES.filter((c, i) => consoles[i])
      .map(c => `&console=${c.id}`)
      .join("");

  const start = Date.now();
  const response = await fetch(url);
  const elapsed = Date.now() - start;

  const games = await response.json();
  return callback({ games, elapsed });
};

const debouncedSearch = debounce(searchGames, 500);

export default function Search() {
  const [searched, setSearched] = useState("");
  const [games, setGames] = useState<Games[]>([]);
  const [consoles, setConsoles] = useState(CONSOLES.map(c => false));
  const [isSearching, setIsSearching] = useState(false);
  const [searchMs, setSearchMs] = useState(0);

  useEffect(() => {
    if (searched) {
      setIsSearching(true);
      debouncedSearch(searched, consoles, ({ games, elapsed }) => {
        setGames(games);
        setSearchMs(elapsed);
        setIsSearching(false);
      });
    }
  }, [searched, consoles]);

  function toggleConsole(i: number) {
    setConsoles(consoles.map((v, ci) => (ci === i ? !v : v)));
  }

  return (
    <div className={styles.container} style={{ display: "flex", width: "80%" }}>
      <aside id="sidebar" style={{ paddingTop: "2rem" }}>
        <input
          type="search"
          value={searched}
          placeholder="title, genre, keyword..."
          onChange={e => setSearched(e.target.value)}
          style={{ fontSize: "1.2rem" }}
        />
        <div id="filters">
          <Checkboxes
            title="Console"
            options={CONSOLES.map(c => c.name)}
            onChange={toggleConsole}
          />
        </div>

        {isSearching ? (
          <p>Searching...</p>
        ) : games && searchMs ? (
          <p>
            Found {games.length} games in {searchMs}ms
          </p>
        ) : null}
      </aside>

      <div className={styles.container} style={{ width: "70%" }}>
        {games.map(({ id, name, console, genres, cover }) => (
          <Link
            key={id}
            href={`/games/${id}`}
            className={styles.card}
            style={{ display: "block" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "75% 25%",
                gap: ".75em",
              }}
            >
              <div>
                <h2>{name}</h2>
                <p>{console && getConsoleName(console)}</p>
                <p>
                  {genres &&
                    genres.length &&
                    genres.map(g => JSON.parse(g)).join(", ")}
                </p>
              </div>
              <p>{cover && <img src={cover} />}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Checkboxes({
  title,
  onChange,
  options,
}: {
  title: string;
  onChange: (i: number) => void;
  options: string[];
}) {
  return (
    <label
      style={{
        display: "block",
        marginTop: "1em",
      }}
    >
      <h4 style={{ marginBottom: 0 }}>{title}</h4>
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