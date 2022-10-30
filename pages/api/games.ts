import type { NextApiRequest, NextApiResponse } from 'next'
import { getXataClient } from "../../src/xata";

const xata = getXataClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {records} = await xata.db.games
      .sort("totalRating", "desc")
      .getPaginated();

  res.status(200).json(records)
}
