import { AxiosInstance } from "axios";
import { createConfiguredAxiosInstance } from "../axios";

export class Http {
    public PublicClient() {
        return createConfiguredAxiosInstance({
            url: "https://dog.ceo/api",
            withBearerToken: false,
        }) as AxiosInstance;
    }
  
    public PrivateClient() {
        return createConfiguredAxiosInstance({
            url: "https://dog.ceo/api",
            withBearerToken: true,
        }) as AxiosInstance;
    }
}