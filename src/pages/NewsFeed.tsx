import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Basic structure of an article we expect from the API
interface Article {
  title: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: string | null;
  url: string;
  content: string | null;
}

interface NewsApiState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

// TEMPORARY HARDCODED API KEY (REMOVE IN PRODUCTION)
const API_KEY = '7e1b614915834391a09bc1c18db4c936';

const useNewsApi = (initialCategory: string = 'All') => {
  const [state, setState] = useState<NewsApiState>({
    articles: [],
    loading: true,
    error: null,
  });

  const [category, setCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchNews = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const baseUrl = "https://newsapi.org/v2/everything";

      const params: Record<string, string | number> = {
        apiKey: API_KEY,
        q: searchTerm || (category === 'All' ? 'top news' : category),
        language: "en",
        sortBy: "publishedAt",
        pageSize: 30,
      };

      const response = await axios.get(baseUrl, {
        params,
        headers: {
          "Connection": "close",
        },
      });

      if (response.data.status !== "ok") {
        throw new Error(response.data.message || "Failed to fetch news.");
      }

      const cleaned = response.data.articles.filter(
        (a: Article) => a.title !== "[Removed]"
      );

      setState({
        articles: cleaned,
        loading: false,
        error: null,
      });
    } catch (err: unknown) {
      const errorMessage = axios.isAxiosError(err) && err.response
        ? `Request failed with status ${err.response.status}`
        : err instanceof Error
        ? err.message
        : "Unknown error";

      setState({
        articles: [],
        loading: false,
        error: `Error fetching data: ${errorMessage}`,
      });
    }
  }, [category, searchTerm]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return {
    ...state,
    category,
    setCategory,
    searchTerm,
    setSearchTerm,
  };
};

export default useNewsApi;
