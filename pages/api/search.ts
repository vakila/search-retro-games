import type { NextApiRequest, NextApiResponse } from "next";
import { getXataClient } from "../../util/xata";

const xata = getXataClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { term, console, genre } = req.query;
  if (Array.isArray(term)) {
    term = term.join(" ");
  }

  const start = Date.now();
  const games = await xata.db.games.search(term as string, {
    filter:
      console && console.length
        ? { console: { $any: Array.isArray(console) ? console : [console] } }
        : undefined,
    fuzziness: 0,
    prefix: "phrase",
    boosters: [{ numericBooster: { column: "totalRating", factor: 2 } }],
  });
  const elapsed = Date.now() - start;

  res.status(200).json({ games, elapsed });
}
