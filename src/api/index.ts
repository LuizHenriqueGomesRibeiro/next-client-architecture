import { createServerNextArchitecture, createClientNextArchitecture, ApiEndpoint } from "@caucolum/next-client-architecture";

export interface BreedsImageRandomDataProps {
    message: string;
    status: string;
}

export interface BreedHoundImagesDataProps {
    message: string[];
    status: string;
}

const api = {
    breeds_image_random: {
        url: "https://dog.ceo/api/breeds/image/random",
        authenticated: false,
        method: 'get',
        DATA_PROPS: {} as BreedsImageRandomDataProps,
    },
    breed_hound_images: {
        url: "https://dog.ceo/api/breed/hound/images",
        authenticated: false,
        method: 'get',
        DATA_PROPS: {} as BreedHoundImagesDataProps,
    },
} as const satisfies Record<string, ApiEndpoint>;

const nextArchitectureServer = createServerNextArchitecture(api);
const nextArchitectureClient = createClientNextArchitecture(nextArchitectureServer, api);

export {
    nextArchitectureServer,
    nextArchitectureClient
}
