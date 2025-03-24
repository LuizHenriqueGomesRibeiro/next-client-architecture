import { Http } from "@/services/http";
import { useEffect } from "react";

const http = new Http();

type ApiConfig = {
  [key: string]: {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
  };
};

type ApiMethods<T extends ApiConfig> = {
  [K in keyof T]: (params?: any) => Promise<any>;
};

const apiConfig = {
  test1: { url: 'https://dog.ceo/api/breeds/list/all', method: 'get' },
} as const;

type ApiInstanceType = ApiMethods<typeof apiConfig>;
const ApiClass = createApiClass(apiConfig);
//@ts-ignore
const apiInstance: ApiInstanceType = new ApiClass();

apiInstance.test1().then(console.log);

function createApiClass<T extends ApiConfig>(list: T) {
  return class Api {
    constructor() {
      Object.keys(list).forEach((key) => {
        (this as any)[key] = async (params?: any) => {
          return this.request(list[key].method, list[key].url, params);
        };
      });
    }

    async request(method: 'get' | 'post' | 'put' | 'delete', url: string, params?: any): Promise<any> {
      const response = await http.PublicClient()[method](url);
      return response.data;
    }
  };
}

export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      // const response2 = await server.breed_hound_images('');
      // console.log('brandom', response2);
    }

    fetch();
  }, []);

return <>
    hello home
  </>
}