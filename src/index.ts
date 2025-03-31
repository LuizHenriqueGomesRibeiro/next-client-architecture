import { ApiConfig, MethodProps, ServerApiMethods } from "./api/types";
import http from "./http";

export interface ApiEndpoint<ArgsProps = unknown, DataProps = unknown> {
    readonly url: string;
    readonly method: MethodProps;
    readonly authenticated: boolean;
    readonly ARGS_PROPS?: ArgsProps;
    readonly DATA_PROPS?: DataProps;
}

export const BASE_URL = "";

export const api = {
    
} as const satisfies Record<string, ApiEndpoint>;

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

function createServerNextArchitecture<T extends ApiConfig>(list: T) {
    const PrimitiveServer = createApiClass(list);
    //@ts-ignore
    const server: ServerApiMethods<typeof list> = new PrimitiveServer();
    return server;
}

export {
    createServerNextArchitecture
}