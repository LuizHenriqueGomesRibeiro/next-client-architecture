export type EndpointMethods = {
    [K in keyof typeof endpoints]: (params: Record<string, any>) => Promise<any>;
};

export const endpoints = {
    requestTest: {
        url: '/breeds/image/random',
        authenticated: false,
    },
    requestTest2: {
        url: '/test2',
        authenticated: false,
    },
    requestTest3: {
        url: '/test3',
        authenticated: false,
    },
}