export interface ApiEndpoint<ArgsProps = unknown, DataProps = unknown> {
    readonly url: string;
    readonly method: "get" | "post" | "put" | "delete";
    readonly authenticated: boolean;
    readonly ARGS_PROPS?: ArgsProps;
    readonly DATA_PROPS?: DataProps;
}