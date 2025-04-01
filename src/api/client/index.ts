"use client"
import { useMemo } from 'react';

import useServiceCall from "../../useServiceCall";
import { ServerApiMethods } from "../types";
import { ApiClientResourcesProps } from "./types";

function createPrimitiveClient<T extends ServerApiMethods<any>>(serverApi: T) {
    return function useClient() {
        return useMemo(() => {
            const client = {} as { [K in keyof T]: () => any };

            Object.keys(serverApi).forEach((key) => {
                client[key as keyof T] = () => useServiceCall({ fn: serverApi[key as keyof T] }) as ApiClientResourcesProps;
            });

            return client;
        }, [serverApi]);
    };
}