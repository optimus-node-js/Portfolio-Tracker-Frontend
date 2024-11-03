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
    <div>
      <FilterPanel setFilters={setFilters} />
      {loading ? <p>Loading data...</p> : error ? <p>{error}</p> : <Graph data={data} />}
    </div>
  );
};
