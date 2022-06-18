import { APIErrorCode, Client, ClientErrorCode, isNotionClientError } from '@notionhq/client';

import { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const formData = JSON.parse(req.body)

    console.log('letseewhatisinside');
    console.log(formData);

    const { 
      fullName,
      companyName,
      budgetEst,
      deadlineEst,
      message,
      email
    } = formData

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DB_ID },
      properties: {
        'Full Name': {
          title: [ { text: { content: fullName }}]
        },
        'Company Name': { 
          rich_text: [{ text: { content: companyName }}]
        },
        Email: { 
          email: email 
        },
        Budget: { 
          select: { name: budgetEst },
        },
        'Deadline': {
          rich_text: [ { text: { content: deadlineEst}}]
        },
        'Message': {
          rich_text: [ { text: { content: message || '' }}]
        }
      }
    })

    console.log("operation succeeded")
    res.status(200).json({ message: "success" });
  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      switch(error.code) {
        case ClientErrorCode.RequestTimeout:
          return res.status(408).json({ message: "Timeout request..."})
          case APIErrorCode.ObjectNotFound:
            return res.status(400).json({ message: "Invalid Database ID"})
          case APIErrorCode.Unauthorized:
            return res.status(401).json({ message: "Unauthorized. Please provide valid credentials to Notion API"})
          default:
            return res.status(400).json({ message: "Something has went wrong.. Please try again later"})
      }
    }
  }
}


export default handler;