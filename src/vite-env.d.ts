/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_CLIENTID: string
    readonly VITE_APP_CLIENSECRET: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  