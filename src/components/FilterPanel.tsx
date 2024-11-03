// src/components/FilterPanel.tsx
import React from 'react';
import { Filters } from '../types';

type FilterPanelProps = {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export const FilterPanel: React.FC<FilterPanelProps> = ({ setFilters }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev: Filters) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <input type="date" name="startDate" onChange={handleFilterChange} />
      <input type="date" name="endDate" onChange={handleFilterChange} />
    </div>
  );
};
