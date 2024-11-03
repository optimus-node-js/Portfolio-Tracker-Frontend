// src/hooks/useFetchPortfolioData.ts

import { useEffect, useState } from 'react';
import { fetchPortfolioData } from '../services/api';
import { CombinedPortfolioData } from '../types';

const useFetchPortfolioData = (filters = {}) => {
  const [data, setData] = useState<CombinedPortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result: CombinedPortfolioData = await fetchPortfolioData(filters);
        console.log('Fetched data:', result); // Debugging log
        setData(result);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError('Failed to fetch portfolio data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return { data, loading, error };
};

export default useFetchPortfolioData;
