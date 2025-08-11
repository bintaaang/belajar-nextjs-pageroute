// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  id? : string | string[] | undefined;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    if (req.method == 'POST') {
        res.status(200).json({
            id: req.query.id,
            name : 'JohnDoe',
        });
    }
    else {
        res.status(404).json({
            message: 'SALAH METHOD, HARUSNYA POST',
        })
    }
}