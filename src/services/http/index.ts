import { AxiosInstance } from "axios";
import { createConfiguredAxiosInstance } from "../axios";

class Http {
    public publicClient() {
        return createConfiguredAxiosInstance({
            url: "https://dog.ceo/api",
            withBearerToken: false,
        }) as AxiosInstance;
    }
  
    public privateClient() {
        return createConfiguredAxiosInstance({
            url: "https://dog.ceo/api",
            withBearerToken: true,
        }) as AxiosInstance;
    }
}

const http = new Http();
export default http;