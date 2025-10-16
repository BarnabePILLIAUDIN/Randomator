import { MISSING_API_ROUTE_ERROR, RANDOM_API_ROUTE } from "@/constants";
import axios from "axios";

const createApiClient = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  if (!apiUrl ) {
    throw new Error(MISSING_API_ROUTE_ERROR)
  }
  const httpClient = axios.create({
    baseURL: apiUrl
  });

  return {
    generateNumber: (min?: number, max?: number) => httpClient.get(`${RANDOM_API_ROUTE}?min=${min ?? ""}&max=${max ?? ""}`),
    generateManyNumbers: (length: number, min?: number, max?: number) => httpClient.get(`${RANDOM_API_ROUTE}/${length}?${min ?? ""}&${max ?? ""}`)
  }
}

export default createApiClient()