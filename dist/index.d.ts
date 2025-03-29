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

interface ApiClientResourcesProps<T = any, K = any> {
    makeRequest: (props?: K) => void;
    data: T;
    args: K;
    isLoading: boolean;
    isSuccess: boolean;
    isPaused: boolean;
    isError: boolean;
    isIdle: boolean;
}

declare const endpoints: {};

type ClientApiMethods<T extends ApiConfig> = {
    [K in keyof T]: (params?: any) => ApiClientResourcesProps<T[K]["DATA_PROPS"], T[K]["ARGS_PROPS"]>;
};
type ApiClientInstanceType = ClientApiMethods<typeof endpoints>;

type ServerInstanceType = ServerApiMethods<typeof endpoints>;

interface ApiEndpoint<ArgsProps = unknown, DataProps = unknown> {
    readonly url: string;
    readonly method: MethodProps;
    readonly authenticated: boolean;
    readonly ARGS_PROPS?: ArgsProps;
    readonly DATA_PROPS?: DataProps;
}
declare const serverNextClientArchitecture: ServerInstanceType;
declare const clientNextClientArchitecture: ApiClientInstanceType;

export { type ApiEndpoint, clientNextClientArchitecture, serverNextClientArchitecture };
