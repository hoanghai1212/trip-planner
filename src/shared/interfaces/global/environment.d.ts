declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PUBLIC_URL: string;
      AFFILIATE_API_URL: string;
    }
  }
}

export {};
