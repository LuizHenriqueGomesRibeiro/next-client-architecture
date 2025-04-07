# Next Client Architecture

Next-client-architecture is a JavaScript library that quickly and automatically creates HTTP requests, aligning with the client-server architecture.

## Features

With Next-client-architecture, the user can list their endpoints, automatically generating:

- **`server` object**: A class object whose methods are used on the server side, such as in `getServerSideProps` and `getStaticProps`.
- **`client` object**: A class object with the same methods as server, but with embedded business logic, for use on pages and components. These objects include:
  - `makeRequest`: A usable function to trigger the client request.
  - `data`: The response of the request.
  - `args`: Parameters of the last request.
  - `isLoading`: Boolean indicating whether the request is in progress.
  - `isSuccess`: Boolean indicating whether the request was successfully completed.
  - `isPaused`: Boolean indicating whether the request was paused.
  - `isError`: Boolean indicating whether the request failed.
  - `isIdle`: Boolean indicating whether the request is currently idle.

## Usage Example

### 1. Define Endpoints

The API object is automatically created when implementing the library:

```ts
export const BASE_URL = "";

export const api = {} as const satisfies Record<string, ApiEndpoint>;
```
Now just include your own API:

```ts
interface BreedsImageRandomArgProps {
    breed?: string;
}

interface BreedsImageRandomDataProps {
    message: string;
    status: string;
}

interface BreedsHoudImagesDataProps {
    message: string[];
    status: string;
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
```

or

```ts
    export const BASE_URL = "";
    
    export const api = {
        breeds_image_random: { 
            url: 'https://dog.ceo/api/breeds/image/random', 
            method: 'get', 
            authenticated: false, 
            ARGS_PROPS: {} as BreedsImageRandomArgProps,  
            DATA_PROPS: {} as BreedsImageRandomDataProps,
        },
        breed_hound_images: { 
            url: 'https://dog.ceo/api/breed/hound/images', 
            method: 'get', 
            authenticated: false, 
            DATA_PROPS: {} as BreedsHoudImagesDataProps,
        },
    } as const satisfies Record<string, ApiEndpoint>;
```

### 2. Server-Side Usage (`getServerSideProps`)

```ts
import { server } from "@/services/api";

export const getServerSideProps = async () => {
    const response = await server.breed_hound_images();
    return {
        props: {
            listByBreed: response.message
        },
    };
};
```

### 3. Client-Side Usage (React Component)

```tsx
import { client } from "@/services/api";

interface PageProps {
    listByBreed: string[];
}

const Index = ({ listByBreed }: PageProps) => {
    const { makeRequest, data, isSuccess } = client.breeds_image_random();

    return (
        <div>
            <div>
                {isSuccess && <img src={data.message} alt="" />}
                <button onClick={() => makeRequest()}>New request</button>
            </div>
            <div className="h-50 overflow-y-scroll">
                {listByBreed.map((breed, index) => (
                    <div key={index}>{breed}</div>
                ))}
            </div>
        </div>
    );
};

export default Index;
```

## Conclusion

Next-client-architecture simplifies HTTP request implementation by automatically creating `client` and `server` objects, optimizing workflow, and reducing code complexity.
