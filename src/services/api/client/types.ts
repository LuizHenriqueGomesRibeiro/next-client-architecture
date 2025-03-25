export interface ApiClientResourcesProps<T = any> {
    makeRequest: (props: any) => void,
    data: Promise<T>,
    args: any,
    isLoading: boolean,
    isSuccess: boolean, 
    isPaused: boolean,
    isError: boolean,
    isIdle: boolean,
}