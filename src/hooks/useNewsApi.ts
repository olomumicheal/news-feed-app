import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Define the basic structure of an article we expect from the API
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

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const useNewsApi = (initialCategory: string = 'All') => {
  const [state, setState] = useState<NewsApiState>({
    articles: [],
    loading: true,
    error: null,
  });
  const [category, setCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchNews = useCallback(async () => {
    if (!API_KEY) {
      setState({ articles: [], loading: false, error: 'API Key is missing in environment variables. Did you restart the server?' });
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const baseUrl = 'https://newsapi.org/v2/top-headlines';
      const params = {
        apiKey: API_KEY,
        country: 'us', 
        pageSize: 30, 
        category: category !== 'All' ? category.toLowerCase() : undefined,
        q: searchTerm || undefined, 
      };

      const response = await axios.get(baseUrl, { 
        params,
        // FIX for 426 Error: Forces a fresh, secure connection
        headers: {
          'Connection': 'close', 
        }
      });

      if (response.data.status !== 'ok') {
        throw new Error(response.data.message || 'Failed to fetch news.');
      }

      setState({
        articles: response.data.articles.filter((a: Article) => a.title !== '[Removed]'),
        loading: false,
        error: null,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setState({ articles: [], loading: false, error: `Error fetching data: ${errorMessage}. Please check your network connection or API key.` });
    }
  }, [category, searchTerm]); 

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return { ...state, setCategory, setSearchTerm, category };
};

export default useNewsApi;