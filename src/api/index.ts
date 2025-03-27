import { ApiEndpoint } from "@/services/endpoints/types";

interface BreedsImageRandomArgProps {
    breed?: string,
}

interface BreedsImageRandomDataProps {
    message: string,
    status: string,
}

export const api = {
    login: {
        url: '/login',
        method: 'post',
        authenticated: false,
    },
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