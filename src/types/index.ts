// src/types/index.ts

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

export interface PortfolioStock {
  stockName: string;
  entries: StockEntry[];
}

export interface StockPortfolio {
  ClientCode: string;
  PortfolioStocks: PortfolioStock[];
}

export interface PortfolioEntry {
  date: string;
  totalholdingvalue: number;
  totalinvvalue: number;
  totalprofitandloss: number;
  totalpnlpercentage: number;
  totalTodayGain: number;
}

export interface ClientPortfolio {
  ClientCode: string;
  Portfolio: PortfolioEntry[];
}

export interface CombinedPortfolioData {
  portfolio?: ClientPortfolio;
  stockPortfolio?: StockPortfolio;
}

export interface Filters {
  startDate: string;
  endDate: string;
}
