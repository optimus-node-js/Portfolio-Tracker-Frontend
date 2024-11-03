// src/pages/Dashboard.tsx

import React from 'react';
import { useRecoilState } from 'recoil';
import { filterAtom } from '../recoil/atoms';
import useFetchPortfolioData from '../hooks/useFetchPortfolioData';
import { Graph } from '../components/Graph';
import { FilterPanel } from '../components/FilterPanel';
import { useTheme } from '@emotion/react';
import Loading from '../components/Loading'; // Import the new Loading component

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
          <Loading /> // Use the Loading component here
        ) : error ? (
          <p>{error}</p>
        ) : data ? (
          <div style={{
            width: '100%',
            height: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
            overflow: 'hidden',
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
