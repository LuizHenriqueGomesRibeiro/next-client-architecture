interface BreedsImageRandomArgProps {
    breed?: string,
}

interface BreedsImageRandomDataProps {
    message: string,
    status: string,
}

interface EndpointBase {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
    authenticated: boolean;
}

type Endpoint<ArgsProps = unknown, DataProps = unknown> = EndpointBase & {
    ARGS_PROPS?: ArgsProps;
    DATA_PROPS?: DataProps;
};

type Endpoints = {
    [key: string]: Endpoint;
};

export const api = {
    breeds_image_random: { 
        url: '/breeds/image/random', 
        method: 'get', 
        authenticated: false, 
        ARGS_PROPS: {} as BreedsImageRandomArgProps,  
        DATA_PROPS: {} as BreedsImageRandomDataProps,
    },
    breeds_list_all: { url: '/breeds/list/all', method: 'get', authenticated: false, },
    breed_hound_images: { url: '/breed/hound/images', method: 'get', authenticated: false, },
}