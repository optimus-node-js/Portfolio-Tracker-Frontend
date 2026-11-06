// src/services/api.ts

import axios from 'axios';
import { CombinedPortfolioData, Filters } from '../types';

// Point VITE_API_BASE_URL at /portfolio/<clientCode> for real data; without it the public demo portfolio is shown.
export const API_BASE_URL: string =
  import.meta.env.VITE_API_BASE_URL || 'https://portfolio-tracker-backend.vercel.app/portfolio/demo';
export const IS_DEMO = API_BASE_URL.replace(/\/$/, '').endsWith('/demo');

export const fetchPortfolioData = async (filters: Filters): Promise<CombinedPortfolioData> => {
  try {
    const response = await axios.get<CombinedPortfolioData>(`${API_BASE_URL}/combined`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    throw error;
  }
};
