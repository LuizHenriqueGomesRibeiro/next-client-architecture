export type MethodProps = 'get' | 'post' | 'put' | 'delete';

export interface ApiClientResourcesProps<T = any, K = any> {
    makeRequest: (props?: K) => void,
    data: T,
    args: K,
    isLoading: boolean,
    isSuccess: boolean, 
    isPaused: boolean,
    isError: boolean,
    isIdle: boolean,
}

export type ApiConfig = {
    [key: string]: {
        url: string;
        method: MethodProps;
        authenticated: boolean;
        ARGS_PROPS?: unknown;
        DATA_PROPS?: unknown;
    };
};

export type ServerApiMethods<T extends ApiConfig> = {
    [K in keyof T]: (params?: T[K]['ARGS_PROPS']) => Promise<T[K]['DATA_PROPS']>;
};