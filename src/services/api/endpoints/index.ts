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
    breeds_list_all: {
        url: '/breeds/list/all',
        method: 'get',
        authenticated: false,
    },
    breed_hound_images: {
        url: '/breed/hound/images',
        method: 'get',
        authenticated: false,
    },
}