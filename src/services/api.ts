// src/services/api.ts
import axios from 'axios';
import { CombinedPortfolioData } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchPortfolioData = async (filters = {}): Promise<CombinedPortfolioData> => {
  try {
    const response = await axios.get<CombinedPortfolioData>(`${API_BASE_URL}/combined`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    throw error;
  }
};
