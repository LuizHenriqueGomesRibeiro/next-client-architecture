import { ApiInstanceType, PrimitiveServer } from "./server";
import { PrimitiveClient } from "./client";

//@ts-ignore
const server: ApiInstanceType = new PrimitiveServer();
const client = new PrimitiveClient();

export { server, client };