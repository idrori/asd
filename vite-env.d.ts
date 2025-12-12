/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_GEMINI_API_KEY: string;
  readonly VITE_OPENAI_API_KEY: string;
  readonly VITE_INTERNAL_API_SECRET: string;
  readonly VITE_GITHUB_PAGES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Support for ?raw imports
declare module '*.txt?raw' {
  const content: string;
  export default content;
}
