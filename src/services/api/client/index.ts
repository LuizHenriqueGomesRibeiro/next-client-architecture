import useServiceCall from "@/services/useServiceCall";

import { ApiConfig, ServerApiMethods } from "../types";
import { ApiClientResourcesProps } from "./types";
import { endpoints } from "@/services/endpoints";
import { serverNextArchitecture } from "..";

function createPrimitiveClient<T extends ServerApiMethods<any>>(): new () => { [K in keyof T]: () => any } {
    class PrimitiveClient {
        constructor() {
            Object.keys(serverNextArchitecture).forEach((key) => {
                (this as any)[key] = () => {
                    //@ts-ignore
                    return useServiceCall({ fn: server[key as keyof T] }) as ApiClientResourcesProps; 
                };
            });
        }
    }

    return PrimitiveClient as new () => { [K in keyof T]: () => any };
}

export type ClientApiMethods<T extends ApiConfig> = {
    [K in keyof T]: (params?: any) => ApiClientResourcesProps<T[K]["DATA_PROPS"], T[K]["ARGS_PROPS"]>;
};

export type ApiClientInstanceType = ClientApiMethods<typeof endpoints>;
export const PrimitiveClient = createPrimitiveClient();