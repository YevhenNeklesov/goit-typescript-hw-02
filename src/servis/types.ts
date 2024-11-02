

export interface Article {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description?: string;
  user: {
    name: string;
  };
  likes?: number;
}

export interface FetchArticlesResponse {
  results: Article[];
  total_pages: number
}
