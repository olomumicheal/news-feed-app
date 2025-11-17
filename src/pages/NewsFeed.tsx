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

// !!! TEMPORARY CHANGE: HARDCODED API KEY TO BYPASS .ENV ISSUES !!!
// !!! REMOVE THIS BEFORE FINAL SUBMISSION !!!
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
    // The key is now always present, so we remove the check:
    // if (!API_KEY) { ... } 

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // Use the '/everything' endpoint which is often less restrictive with 426 errors
      const baseUrl = 'https://newsapi.org/v2/everything';
      
      const params = {
        apiKey: API_KEY,
        q: searchTerm || (category === 'All' ? 'top news' : category), 
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: 30, 
      };

      if (category !== 'All' && !searchTerm) {
          params.q = category;
      }

      const response = await axios.get(baseUrl, { 
        params,
        // Keep the connection close header for stability
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
      const errorMessage = axios.isAxiosError(err) && err.response 
        ? `Request failed with status code ${err.response.status}` 
        : (err instanceof Error ? err.message : 'An unknown error occurred.');
        
      setState({ articles: [], loading: false, error: `Error fetching data: ${errorMessage}. Please check your network connection or API key.` });
    }
  }, [category, searchTerm]); 

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return { ...state, setCategory, setSearchTerm, category };
};

export default useNewsApi;