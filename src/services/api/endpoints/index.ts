export type EndpointMethods = {
    [K in keyof typeof endpoints]: (params: Record<string, any>) => Promise<any>;
};

interface Endpoint {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    authenticated: boolean;
}

export const endpoints: Record<string, Endpoint> = {
    breeds_image_random: {
        url: '/breeds/image/random',
        method: 'get',
        authenticated: false,
    },
    requestTest2: {
        url: '/test2',
        method: 'post',
        authenticated: false,
    },
    requestTest3: {
        url: '/test3',
        method: 'put',
        authenticated: false,
    },
}