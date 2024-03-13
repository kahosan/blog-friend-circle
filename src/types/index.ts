export type Environment = {
  Bindings: {
    API_ENDPOINT: string;
    API_TOKEN: string;
    API_CACHE_KV: KVNamespace;
    API_CACHE_TTL: number;
    CATEGORY_ID: string;
  };
};

export * from './api';