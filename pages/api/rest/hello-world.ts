import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  hello: 'world';
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ hello: 'world' });
}
