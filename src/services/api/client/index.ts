import useServiceCall from "@/services/useServiceCall";

import { ApiConfig, ServerApiMethods } from "../types";
import { ApiClientResourcesProps } from "./types";
import { endpoints } from "@/services/endpoints";
import { server } from "..";

function createPrimitiveClient<T extends ServerApiMethods<any>>(): new () => { [K in keyof T]: () => any } {
    class PrimitiveClient {
        constructor() {
            Object.keys(server).forEach((key) => {
                (this as any)[key] = () => {
                    //@ts-ignore
                    const resources = useServiceCall({ fn: server[key as keyof T] }); 
                    return resources as ApiClientResourcesProps; 
                };
            });
        }
    }

    return PrimitiveClient as new () => { [K in keyof T]: () => any };
}

export type ClientApiMethods<T extends ApiConfig, R> = {
    [K in keyof T]: (params?: any) => R;
};

export type ApiClientInstanceType = ClientApiMethods<typeof endpoints, ApiClientResourcesProps>;
export const PrimitiveClient = createPrimitiveClient();