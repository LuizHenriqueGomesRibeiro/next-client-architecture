import { server } from "@/services/api";
import { useEffect } from "react";

const apiConfig = {
  test1: {
    url: '/',
    method: 'get'
  },
  test2: {
    url: '/test',
    method: 'post'
  },
} as const;

type ApiConfig = {
  [key: string]: {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
  };
};

type ApiMethods = keyof typeof apiConfig;

const ApiClass = createApiClass(apiConfig);

const apiInstance = new ApiClass() as Record<ApiMethods, (params?: any) => Promise<any>>;
apiInstance.test1

function createApiClass<T extends ApiConfig>(list: T) {
  return class Api {
    constructor() {
      Object.keys(list).forEach((key) => {
        (this as any)[key] = async (params?: any) => {
          return this.request(list[key].method, list[key].url, params);
        };
      });
    }

    async request(method: string, url: string, params?: any): Promise<any> {
      const options: RequestInit = {
        method: method.toUpperCase(),
        headers: { 'Content-Type': 'application/json' },
      };

      if (method.toLowerCase() === 'post' && params) {
        options.body = JSON.stringify(params);
      }

      const response = await fetch(url, options);
      return response.json();
    }
  };
}

export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      const response2 = await server.breed_hound_images('');
      console.log('brandom', response2);
    }

    fetch();
  }, []);

return <>
    hello home
  </>
}