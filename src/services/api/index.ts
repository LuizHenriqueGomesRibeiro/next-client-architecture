import { ApiClientInstanceType, PrimitiveClient } from "./client";
import { PrimitiveServer, ServerInstanceType } from "./server";

export interface ApiEndpoint<ArgsProps = unknown, DataProps = unknown> {
    readonly url: string;
    readonly method: "get" | "post" | "put" | "delete";
    readonly authenticated: boolean;
    readonly ARGS_PROPS?: ArgsProps;
    readonly DATA_PROPS?: DataProps;
}

//@ts-ignore
const serverNextArchitecture: ServerInstanceType = new PrimitiveServer();
//@ts-ignore
const clientNextArchitecture: ApiClientInstanceType = new PrimitiveClient();

export { serverNextArchitecture, clientNextArchitecture };