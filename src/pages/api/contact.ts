import { Client } from '@notionhq/client';
import { sendStatusCode } from 'next/dist/server/api-utils';
import { NextApiResponse, NextApiRequest } from 'next';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})


export function async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.sendStatusCode(405).json({ message: `${req.method} requests are not allowed`})
  }


  try {
    const formData = JSON.parse(req.body)
  } catch (errpr) {
    
  }
}