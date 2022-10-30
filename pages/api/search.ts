import type { NextApiRequest, NextApiResponse } from 'next'
import { getXataClient } from "../../src/xata";

const xata = getXataClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const {query} = req.query as { query: string };
  const records = await xata.search.all(query, {
            tables: [{ table: "games" }],
            fuzziness: 0,
            prefix: "phrase",
          });

  res.status(200).json(records)
}
