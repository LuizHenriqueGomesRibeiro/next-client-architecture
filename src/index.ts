import { ApiClientInstanceType, PrimitiveClient } from "@caucolum/next-client-architecture/src/client";
import { PrimitiveServer, ServerInstanceType } from "@caucolum/next-client-architecture/src/server";

export type MethodProps = 'get' | 'post' | 'put' | 'delete';

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