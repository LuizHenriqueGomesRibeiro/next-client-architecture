interface ApiEndpoint<ArgsProps = unknown, DataProps = unknown> {
    readonly url: string;
    readonly method: "get" | "post" | "put" | "delete";
    readonly authenticated: boolean;
    readonly ARGS_PROPS?: ArgsProps;
    readonly DATA_PROPS?: DataProps;
}

interface BreedsImageRandomArgProps {
    breed?: string,
}

interface BreedsImageRandomDataProps {
    message: string,
    status: string,
}

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
} as const satisfies Record<string, ApiEndpoint>;