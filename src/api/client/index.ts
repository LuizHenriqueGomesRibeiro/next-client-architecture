// import { ApiConfig, ServerApiMethods } from "../types";
// import { ApiClientResourcesProps } from "./types";

// import useServiceCall from "../../useServiceCall";
// import { serverNextClientArchitecture } from "../../dw";
// import { api } from "../../../../../../src/api";

// function createPrimitiveClient<T extends ServerApiMethods<any>>(): new () => { [K in keyof T]: () => any } {
//     class PrimitiveClient {
//         constructor() {
//             Object.keys(serverNextClientArchitecture).forEach((key) => {
//                 (this as any)[key] = () => {
//                     //@ts-ignore
//                     return useServiceCall({ fn: serverNextClientArchitecture[key as keyof T] }) as ApiClientResourcesProps; 
//                 };
//             });
//         }
//     }

//     return PrimitiveClient as new () => { [K in keyof T]: () => any };
// }

// export type ClientApiMethods<T extends ApiConfig> = {
//     [K in keyof T]: (params?: any) => ApiClientResourcesProps<T[K]["DATA_PROPS"], T[K]["ARGS_PROPS"]>;
// };

// export type ApiClientInstanceType = ClientApiMethods<typeof api>;
// export const PrimitiveClient = createPrimitiveClient();