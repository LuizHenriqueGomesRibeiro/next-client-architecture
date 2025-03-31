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

declare const BASE_URL = "";
declare const api: {};
declare function createServerNextArchitecture<T extends ApiConfig>(list: T): ServerApiMethods<T>;

export { BASE_URL, api, createServerNextArchitecture };
