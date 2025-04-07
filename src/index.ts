import { ApiConfig, ClientApiMethods, MethodProps, ServerApiMethods } from "./api/types";
import { ApiClientResourcesProps } from "./api/types";

import useServiceCall from "./useServiceCall";
import http from "./http";

export interface ApiEndpoint<ArgsProps = unknown, DataProps = unknown> {
    readonly url: string;
    readonly method: MethodProps;
    readonly authenticated: boolean;
    readonly ARGS_PROPS?: ArgsProps;
    readonly DATA_PROPS?: DataProps;
}

function createApiClass<T extends ApiConfig>(list: T) {
    return class Api {
        constructor() {
            Object.keys(list).forEach((key) => {
                (this as any)[key] = async (params?: any) => {
                    return this.request(list[key].method, list[key].url, list[key].authenticated);
                };
            });
        }
    
        async request(method: MethodProps, url: string, authenticated?: boolean): Promise<any> {
            const client = authenticated ? http.privateClient() : http.publicClient();
            const response = await client[method](url);
            return response.data;
        }
    };
}

function createPrimitiveClient<T extends ServerApiMethods<any>>(serverApi: T) {
    const client = {} as { [K in keyof T]: () => ApiClientResourcesProps };

    Object.keys(serverApi).forEach((key) => {
        client[key as keyof T] = () => {
          if (typeof window === "undefined") {
            throw new Error(
              `❌ [next-client-architecture]: Tentativa de usar ${String(key)} fora do client.`
            );
          }
          return useServiceCall({ fn: serverApi[key as keyof T] }) as ApiClientResourcesProps;
        };
      });

    return client;
}

function createServerNextArchitecture<T extends ApiConfig>(list: T) {
    const PrimitiveServer = createApiClass(list);
    //@ts-ignore
    const server: ServerApiMethods<typeof list> = new PrimitiveServer();
    return server;
}

function createClientNextArchitecture<T extends ServerApiMethods<any>, K extends ApiConfig>(serverApi: T, list: K) {
    //@ts-ignore
    const client: ClientApiMethods<typeof list> = createPrimitiveClient(serverApi);
    return client;
}

export {
    createServerNextArchitecture,
    createClientNextArchitecture
}