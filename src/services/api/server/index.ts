import { ApiConfig, ApiMethods, MethodProps } from "../types";
import { endpoints } from "../../endpoints";

import http from "@/services/http";

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

export type ApiInstanceType = ApiMethods<typeof endpoints>;
export const PrimitiveServer = createApiClass(endpoints);