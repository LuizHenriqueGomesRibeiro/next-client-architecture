export interface ApiClientResourcesProps {
    makeRequest: (props: any) => void,
    data: Promise<any>,
    args: any,
    isLoading: boolean,
    isSuccess: boolean, 
    isPaused: boolean,
    isError: boolean,
    isIdle: boolean,
}