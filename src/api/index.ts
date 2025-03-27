import { ApiEndpoint } from "@/services/endpoints/types";

interface BreedsImageRandomArgProps {
    breed?: string,
}

interface BreedsImageRandomDataProps {
    message: string,
    status: string,
}

interface BreedsHoudImagesDataProps {
    message: string[],
    status: string
}

export const BASE_URL = "https://dog.ceo/api";

export const api = {
    breeds_image_random: { 
        url: '/breeds/image/random', 
        method: 'get', 
        authenticated: false, 
        ARGS_PROPS: {} as BreedsImageRandomArgProps,  
        DATA_PROPS: {} as BreedsImageRandomDataProps,
    },
    breed_hound_images: { 
        url: '/breed/hound/images', 
        method: 'get', 
        authenticated: false, 
        DATA_PROPS: {} as BreedsHoudImagesDataProps,
    },
} as const satisfies Record<string, ApiEndpoint>;