import { api } from "@/api";

interface BreedsImageRandomArgProps {
    breed?: string,
}

interface BreedsImageRandomDataProps {
    message: string,
    status: string,
}

export const endpoints = api;