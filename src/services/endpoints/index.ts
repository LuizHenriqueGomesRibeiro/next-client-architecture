interface BreedsImageRandomArgProps {

}

interface BreedsImageRandomDataProps {
    message: string,
    status: string,
}

export const endpoints = {
    breeds_image_random: { 
        url: '/breeds/image/random', 
        method: 'get', 
        authenticated: false, 
        ARGS_PROPS: {} as BreedsImageRandomArgProps,  
        DATA_PROPS: {} as BreedsImageRandomDataProps,
    },
    breeds_list_all: { url: '/breeds/list/all', method: 'get', authenticated: false, },
    breed_hound_images: { url: '/breed/hound/images', method: 'get', authenticated: false, },
} as const;