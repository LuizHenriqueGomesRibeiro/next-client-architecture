import { EndpointMethods } from "./endpoints";
import { PrimitiveServer } from "./server";
import { Http } from "../http";

const http = new Http();
const server = new PrimitiveServer(http);

export {
    server,
}