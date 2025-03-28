import { ApiClientInstanceType, PrimitiveClient } from "./client";
import { PrimitiveServer, ServerInstanceType } from "./server";

//@ts-ignore
const serverNextClientArchitecture: ServerInstanceType = new PrimitiveServer();
//@ts-ignore
const clientNextClientArchitecture: ApiClientInstanceType = new PrimitiveClient();

export { serverNextClientArchitecture, clientNextClientArchitecture };