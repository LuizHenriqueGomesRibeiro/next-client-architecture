import { Http } from "@/services/http";
import { endpoints } from "../endpoints";

export class PrimitiveServer {
    private publicClient;
    private privateClient;

    constructor(private readonly http: Http) {
        this.publicClient = this.http.PublicClient();
        this.privateClient = this.http.PrivateClient();
        this.generateMethods();
    }

    private generateMethods() {
        Object.entries(endpoints).forEach(([key, { url, authenticated }]) => {
            (this as any)[key] = async (params: Record<string, any>) => {
                const client = authenticated ? this.privateClient : this.publicClient;
                const response = await client.get(url, { params });
                return response.data;
            };
        });
    }
}