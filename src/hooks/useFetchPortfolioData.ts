// src/hooks/useFetchPortfolioData.ts

import { useEffect, useState } from 'react';
import { fetchPortfolioData } from '../services/api';
import { CombinedPortfolioData, Filters } from '../types';

const useFetchPortfolioData = (filters: Filters = { startDate: '', endDate: '' }) => {
  const [data, setData] = useState<CombinedPortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Provide default dates if not set
        const effectiveFilters: Filters = {
          startDate: filters.startDate || '2024-01-01', // Example default
          endDate: filters.endDate || '2024-12-31', // Example default
        };
        const result: CombinedPortfolioData = await fetchPortfolioData(effectiveFilters);
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
