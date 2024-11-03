// src/components/FilterPanel.tsx

import React from 'react';
import { Filters } from '../types';

type FilterPanelProps = {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export const FilterPanel: React.FC<FilterPanelProps> = ({ setFilters }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev: Filters) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
      <label style={{ marginRight: '1rem' }}>
        Start Date:
        <input type="date" name="startDate" onChange={handleFilterChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" onChange={handleFilterChange} />
      </label>
      {/* Add more filter inputs as needed */}
    </div>
  );
};
