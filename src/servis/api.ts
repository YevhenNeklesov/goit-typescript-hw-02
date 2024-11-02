import axios from "axios";
import { FetchArticlesResponse } from "./types";



export const fetchArticles = async (query: string, page: number = 0): Promise<FetchArticlesResponse> => {
    const { data } = await axios.get<FetchArticlesResponse>(`https://api.unsplash.com/search/photos/?client_id=Zi55gyuZOSdRIJwLHjEldTSbP4dwZv-E9vELqZun-m8&`, {
        params: {
            page: page,
            per_page: 12,
            query: query,
        }
    });
    return data;
};