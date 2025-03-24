import { Http } from "@/services/http";

export class PrimitiveServer {
    private publicClient;
    private privateClient;

    constructor(private readonly http: Http) {
        this.publicClient = this.http.PublicClient();
        this.privateClient = this.http.PrivateClient();
    }

    public async breeds_image_random({ ...params }) {
        const response = await this['publicClient'].get('/breeds/image/random', {
            params
        });

        return response.data;
    }

    public async requestTst2({ ...params }) {
        const response = await this['publicClient'].get('/testTst2', {
            params
        });

        return response.data;
    }

    public async requestTst3({ ...params }) {
        const response = await this['publicClient'].get('/testTst3', {
            params
        });

        return response.data;
    }
}