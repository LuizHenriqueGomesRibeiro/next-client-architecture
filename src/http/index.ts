import { createConfiguredAxiosInstance } from "../axios";
import { BASE_URL } from "../../../../../src/api";
import { AxiosInstance } from "axios";

class Http {
    public publicClient() {
        return createConfiguredAxiosInstance({
            url: BASE_URL,
            withBearerToken: false,
        }) as AxiosInstance;
    }
  
    public privateClient() {
        return createConfiguredAxiosInstance({
            url: BASE_URL,
            withBearerToken: true,
        }) as AxiosInstance;
    }
}

const http = new Http();
export default http;