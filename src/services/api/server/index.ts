import { Http } from "@/services/http";

export class PrimitiveServer {
    private publicClient;
    private privateClient;

    constructor(private readonly http: Http) {
        this.publicClient = this.http.PublicClient();
        this.privateClient = this.http.PrivateClient();
    }

    public async breeds_image_random({ ...params }: any) {
        const response = await this['publicClient'].get('/breeds/image/random', {
            params
        });

        return response.data;
    }

    public async breeds_list_all({ ...params }: any) {
        const response = await this['publicClient'].get('/breeds/list/all', {
            params
        });

        return response.data;
    }

    public async breed_hound_images({ ...params }: any) {
        const response = await this['publicClient'].get('/breed/hound/images', {
            params
        });

        return response.data;
    }
}