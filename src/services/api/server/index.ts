import { Http } from "@/services/http";

export class PrimitiveServer {
    private publicClient;
    private privateClient;

    constructor(private readonly http: Http) {
        this.publicClient = this.http.PublicClient();
        this.privateClient = this.http.PrivateClient();
    }


    protected async requestTst1({ ...params }) {
        const response = await this['publicClient'].get('/test', {
            params
        });

        return response.data;
    }

    protected async requestTst2({ ...params }) {
        const response = await this['publicClient'].get('/testTst2', {
            params
        });

        return response.data;
    }

    protected async requestTst3({ ...params }) {
        const response = await this['publicClient'].get('/testTst3', {
            params
        });

        return response.data;
    }
}