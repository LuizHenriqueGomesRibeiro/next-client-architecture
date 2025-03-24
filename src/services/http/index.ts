import { AxiosInstance } from "axios";
import { createConfiguredAxiosInstance } from "../axios";

export class Http {
    public PublicClient() {
        return createConfiguredAxiosInstance({
            url: process.env.CURRENT_URL,
            withBearerToken: false,
        });
    }
  
    public PrivateClient() {
        return createConfiguredAxiosInstance({
            url: process.env.CURRENT_URL,
            withBearerToken: true,
        });
    }
}