import { ApiClientInstanceType, PrimitiveClient } from "./client";
import { PrimitiveServer, ServerInstanceType } from "./server";

//@ts-ignore
const serverNextArchitecture: ServerInstanceType = new PrimitiveServer();
//@ts-ignore
const clientNextArchitecture: ApiClientInstanceType = new PrimitiveClient();

export { serverNextArchitecture, clientNextArchitecture };