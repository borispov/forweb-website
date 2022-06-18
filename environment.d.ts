declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NOTION_DB_ID: string;
      NOTION_API_KEY: string;
      CALENDLY_URL: string;
    }
  }
}

export {}