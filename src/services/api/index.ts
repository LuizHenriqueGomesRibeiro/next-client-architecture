import { PrimitiveServer } from "./server";
import { Http } from "../http";

const http: Http = new Http();
const server: PrimitiveServer = new PrimitiveServer(http);


export {
    server,
}