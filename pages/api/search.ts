import type { NextApiRequest, NextApiResponse } from 'next'
import { getXataClient } from "../../src/xata";

const xata = getXataClient();


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  let {term, console, genre} = req.query;
  if (Array.isArray(term)) {
    term = term.join(" ");
  }  
  
  const records = await xata.search.all(term as string, {
    tables: [console && console.length 
      ? { 
          table: "games" ,
          filter: { console: { $any: Array.isArray(console)? console: [console] } }
        }
      : { table: "games"}],
    fuzziness: 0,
    prefix: "phrase",
  });
  const recordsWithMeta = records.map(r => r.record); 
  // TODO maybe show highlights in playground rather than here


  res.status(200).json(recordsWithMeta)
}
