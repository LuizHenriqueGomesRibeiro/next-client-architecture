import useServiceCall from "@/services/useServiceCall";

import { ClientApiMethods, ServerApiMethods } from "../types";
import { server } from "..";
import { ApiClientResourcesProps } from "./types";
import { endpoints } from "@/services/endpoints";

function createPrimitiveClient<T extends ServerApiMethods<any>>(): new () => { [K in keyof T]: () => any } {
    class PrimitiveClient {
        constructor() {
            Object.keys(server).forEach((key) => {
                (this as any)[key] = () => {
                    //@ts-ignore
                    const resources = useServiceCall({ fn: server[key as keyof T] }); 
                    return resources; 
                };
            });
        }
    }

    return PrimitiveClient as new () => { [K in keyof T]: () => any };
}

export type ApiClientInstanceType = ClientApiMethods<typeof endpoints, ApiClientResourcesProps>;
export const PrimitiveClient = createPrimitiveClient();