import useServiceCall from "@/services/useServiceCall";

import { ApiMethods } from "../types";
import { server } from "..";

function createPrimitiveClient<T extends ApiMethods<any>>(): new () => { [K in keyof T]: () => any } {
    class PrimitiveClient {
        constructor() {
            Object.keys(server).forEach((key) => {
                (this as any)[key] = () => {
                    //@ts-ignore
                    return useServiceCall({ fn: server[key as keyof T] });
                };
            });
        }
    }

    return PrimitiveClient as new () => { [K in keyof T]: () => any };
}

export const PrimitiveClient = createPrimitiveClient();