const {Client} = require("@notionhq/client")


exports.handler = async function (event) {

  const notion = new Client({ auth: process.env.NOTION_SECRET });

  const form = JSON.parse(event.body).payload.data

  const newRow = {
    parent: {
      database_id: process.enmv.DATABASE_ID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: form.firstName
            }
          }
        ]
      },
      Name: {
        lastName: form.lastName
      },
      Name: {
        email: form.email
      },
      Name: {
        phoneNum: form.phoneNum
      },
      Name: {
        budgetEst: form.budgetEst
      },
      Name: {
        message: form.message
      },
    }
  }

  await notion.pages.create(newRow);

  return {
    statusCode: 200
  }
}