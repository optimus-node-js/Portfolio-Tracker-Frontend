// src/pages/Dashboard.tsx

import React from 'react';
import { useRecoilState } from 'recoil';
import { filterAtom } from '../recoil/atoms';
import useFetchPortfolioData from '../hooks/useFetchPortfolioData';
import { Graph } from '../components/Graph';
import { FilterPanel } from '../components/FilterPanel';
import { useTheme } from '@emotion/react';

export const Dashboard: React.FC = () => {
  const [filters, setFilters] = useRecoilState(filterAtom);
  const { data, loading, error } = useFetchPortfolioData(filters);
  const theme = useTheme();

  return (
    <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
  }}
>
  {/* Filter Panel at the top */}
  <FilterPanel setFilters={setFilters} />

  {/* Graph occupies the remaining space without shifting */}
  <div style={{
    flex: 1, 
    width: '100%',
    height: 'calc(100vh - 100px)', // Adjust height to account for FilterPanel if needed
    overflow: 'hidden',
    boxSizing: 'border-box'
  }}>
    {loading ? (
      <p>Loading data...</p>
    ) : error ? (
      <p>{error}</p>
    ) : data ? (
      <div style={{
        width: '100%',     // Ensures it takes the full available width
        height: '100%',    // Ensures it takes the full available height within the container
        maxWidth: '100vw', // Prevents exceeding viewport width
        maxHeight: '100vh', // Prevents exceeding viewport height
        overflow: 'hidden', // Prevents any overflow or scrollbars
        boxSizing: 'border-box'
      }}>
        <Graph data={data} />
      </div>
    ) : (
      <p>No data available.</p>
    )}
  </div>
</div>


  );
};
