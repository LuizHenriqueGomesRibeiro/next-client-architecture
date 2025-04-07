// src/useServiceCall/index.ts
import { useMutation } from "react-query";
var useServiceCall = ({ fn }) => {
  const {
    mutateAsync,
    isLoading,
    isSuccess,
    isPaused,
    isError,
    isIdle,
    data
  } = useMutation(async (...args) => {
    const response = await fn(...args);
    return response;
  });
  const makeRequest = (props) => {
    mutateAsync(props);
  };
  return {
    makeRequest,
    data,
    args: data?.args,
    isLoading,
    isSuccess,
    isPaused,
    isError,
    isIdle
  };
};
var useServiceCall_default = useServiceCall;

// src/axios/index.ts
import axios from "axios";
var createConfiguredAxiosInstance = (options) => {
  const axiosInstance = axios.create({
    ...options,
    baseURL: options.url,
    headers: {
      "Content-Type": "application/json"
    }
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

// ../../../src/api/index.ts
var BASE_URL = "";

// src/http/index.ts
var Http = class {
  publicClient() {
    return createConfiguredAxiosInstance({
      url: BASE_URL,
      withBearerToken: false
    });
  }
  privateClient() {
    return createConfiguredAxiosInstance({
      url: BASE_URL,
      withBearerToken: true
    });
  }
};
var http = new Http();
var http_default = http;

// src/index.ts
function createApiClass(list) {
  return class Api {
    constructor() {
      Object.keys(list).forEach((key) => {
        this[key] = async (params) => {
          return this.request(list[key].method, list[key].url, list[key].authenticated);
        };
      });
    }
    async request(method, url, authenticated) {
      const client = authenticated ? http_default.privateClient() : http_default.publicClient();
      const response = await client[method](url);
      return response.data;
    }
  };
}
function createPrimitiveClient(serverApi) {
  const client = {};
  Object.keys(serverApi).forEach((key) => {
    client[key] = () => {
      if (typeof window === "undefined") {
        throw new Error(
          `\u274C [next-client-architecture]: Tentativa de usar ${String(key)} fora do client.`
        );
      }
      return useServiceCall_default({ fn: serverApi[key] });
    };
  });
  return client;
}
function createServerNextArchitecture(list) {
  const PrimitiveServer = createApiClass(list);
  const server = new PrimitiveServer();
  return server;
}
function createClientNextArchitecture(serverApi, list) {
  const client = createPrimitiveClient(serverApi);
  return client;
}
export {
  createClientNextArchitecture,
  createServerNextArchitecture
};
