type MethodProps = 'get' | 'post' | 'put' | 'delete';
type ApiConfig = {
    [key: string]: {
        url: string;
        method: MethodProps;
        authenticated: boolean;
        ARGS_PROPS?: unknown;
        DATA_PROPS?: unknown;
    };
};
type ServerApiMethods<T extends ApiConfig> = {
    [K in keyof T]: (params?: T[K]['ARGS_PROPS']) => Promise<T[K]['DATA_PROPS']>;
};

interface ApiEndpoint<ArgsProps = unknown, DataProps = unknown> {
    readonly url: string;
    readonly method: MethodProps;
    readonly authenticated: boolean;
    readonly ARGS_PROPS?: ArgsProps;
    readonly DATA_PROPS?: DataProps;
}
declare const BASE_URL = "";
declare const api: {};
declare function createServerNextArchitecture<T extends ApiConfig>(list: T): ServerApiMethods<T>;

export { type ApiEndpoint, BASE_URL, api, createServerNextArchitecture };
