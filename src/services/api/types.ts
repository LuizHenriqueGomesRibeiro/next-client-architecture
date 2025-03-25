export type MethodProps = 'get' | 'post' | 'put' | 'delete';

export type ApiConfig = {
    [key: string]: {
        url: string;
        method: MethodProps;
        authenticated: boolean;
    };
};
  
export type ServerApiMethods<T extends ApiConfig> = {
    [K in keyof T]: (params?: any) => Promise<any>;
};

export type ClientApiMethods<T extends ApiConfig, R> = {
    [K in keyof T]: (params?: any) => R;
};