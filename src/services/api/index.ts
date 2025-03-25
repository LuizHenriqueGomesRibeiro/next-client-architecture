import { ApiClientInstanceType, PrimitiveClient } from "./client";
import { PrimitiveServer, ServerInstanceType } from "./server";

//@ts-ignore
const server: ServerInstanceType = new PrimitiveServer();
//@ts-ignore
const client = new PrimitiveClient();

export { server, client };