// src/pages/Dashboard.tsx

import React from 'react';
import { useRecoilState } from 'recoil';
import { filterAtom } from '../recoil/atoms';
import useFetchPortfolioData from '../hooks/useFetchPortfolioData';
import { Graph } from '../components/Graph';
import { FilterPanel } from '../components/FilterPanel';

export const Dashboard: React.FC = () => {
  const [filters, setFilters] = useRecoilState(filterAtom);
  const { data, loading, error } = useFetchPortfolioData(filters);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Filter Panel at the top */}
      <FilterPanel setFilters={setFilters} />

      {/* Graph occupies the remaining space */}
      <div style={{ flex: 1, position: 'relative' }}>
        {loading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data ? (
          <Graph data={data} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};
