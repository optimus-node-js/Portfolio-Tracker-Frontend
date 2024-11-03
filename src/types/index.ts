// src/types/index.ts

// Interface for individual stock entries in stock portfolio
export interface StockEntry {
  date: string;
  exchange: string;
  quantity: number;
  realisedquantity: number;
  authorisedquantity: number;
  product: string;
  averageprice: number;
  symboltoken: string;
  overallPnL: number;
  pnlpercentage: number;
  todayGain: number;
}

// Interface for stock portfolio document
export interface StockPortfolio {
  ClientCode: string;
  PortfolioStocks: {
    stockName: string;
    entries: StockEntry[];
  }[];
}

// Interface for individual entries in client portfolio
export interface PortfolioEntry {
  date: string;
  totalholdingvalue: number;
  totalinvvalue: number;
  totalprofitandloss: number;
  totalpnlpercentage: number;
  totalTodayGain: number;
}

// Interface for client portfolio document
export interface ClientPortfolio {
  ClientCode: string;
  Portfolio: PortfolioEntry[];
}

// Combined interface for the aggregated API response
export interface CombinedPortfolioData {
  portfolio?: ClientPortfolio;
  stockPortfolio?: StockPortfolio;
}

// New Filters Interface
export interface Filters {
  startDate: string;
  endDate: string;
  // Add more filter criteria as needed
  // Example:
  // symbol?: string;
  // exchange?: string;
}
