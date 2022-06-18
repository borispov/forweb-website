declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NOTION_DB_ID: string;
      NOTION_API_KEY: string;
    }
  }
}

export {}