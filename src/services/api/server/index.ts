import { Http } from "@/services/http";
import { EndpointMethods, endpoints } from "../endpoints";

export class PrimitiveServer {
    private publicClient;
    private privateClient;

    constructor(private readonly http: Http) {
        this.publicClient = this.http.PublicClient();
        this.privateClient = this.http.PrivateClient();

        (Object.keys(endpoints) as Array<keyof typeof endpoints>).forEach((key) => {
            const { url, method, authenticated } = endpoints[key];
            (this as any)[key] = async (params: Record<string, any> = {}) => {
                const client = authenticated ? this.privateClient : this.publicClient;
                const response = await client[method](url, { params });
                return response.data;
            };
        });
    }

    breeds_image_random!: EndpointMethods["breeds_image_random"];
    breeds_list_all!: EndpointMethods["breeds_list_all"];
    breed_hound_images!: EndpointMethods["breed_hound_images"];
}