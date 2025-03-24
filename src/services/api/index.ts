import { PrimitiveServer } from "./server";
import { endpoints } from "./endpoints";
import { Http } from "../http";

export type EndpointMethods = {
    [K in keyof typeof endpoints]: (params: Record<string, any>) => Promise<any>;
};

const http = new Http();
const server = new PrimitiveServer(http);

export { server };