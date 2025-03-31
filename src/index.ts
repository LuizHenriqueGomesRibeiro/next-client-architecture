import { ApiClientInstanceType, PrimitiveClient } from "./api/client";
import { PrimitiveServer, ServerInstanceType } from "./api/server";
import { MethodProps } from "./api/types";

export interface ApiEndpoint<ArgsProps = unknown, DataProps = unknown> {
    readonly url: string;
    readonly method: MethodProps;
    readonly authenticated: boolean;
    readonly ARGS_PROPS?: ArgsProps;
    readonly DATA_PROPS?: DataProps;
}

//@ts-ignore
const serverNextClientArchitecture: ServerInstanceType = new PrimitiveServer();
//@ts-ignore
const clientNextClientArchitecture: ApiClientInstanceType = new PrimitiveClient();

export { serverNextClientArchitecture, clientNextClientArchitecture };