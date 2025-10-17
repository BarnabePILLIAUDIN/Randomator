export {}

declare global {
  interface Window {
    RUNTIME_CONFIG?: {
      API_URL?: string
      [key: string]: string | undefined
    }
  }
}
