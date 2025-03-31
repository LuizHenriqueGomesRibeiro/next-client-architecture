import { ApiConfig, MethodProps, ServerApiMethods } from "./api/types";
import { ApiEndpoint } from "./dw";
import http from "./http";

const BASE_URL = "";

const api = {
    
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

function createServerNextArchitecture() {
    const PrimitiveServer = createApiClass(api);
    const server: ServerApiMethods<typeof api> = new PrimitiveServer();
    return server;
}

export {
    createServerNextArchitecture
}