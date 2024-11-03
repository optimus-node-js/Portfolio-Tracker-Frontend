// src/components/Graph.tsx

import React, { useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  CombinedPortfolioData,
  PortfolioEntry,
  PortfolioStock,
  StockEntry,
} from '../types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  ChartOptions,
  ChartEvent,
  LegendItem,
  LegendElement,
  ChartData,
} from 'chart.js';
import { format, parse } from 'date-fns';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

type GraphProps = {
  data: CombinedPortfolioData;
};

export const Graph: React.FC<GraphProps> = ({ data }) => {
  if (!data) return null;

  // Extract portfolio data
  const portfolioEntries: PortfolioEntry[] = data.portfolio?.Portfolio || [];

  // Extract stock portfolio data
  const stockPortfolioEntries: PortfolioStock[] = data.stockPortfolio?.PortfolioStocks || [];

  // Define possible portfolio metrics
  const portfolioMetrics = [
    { key: 'totalholdingvalue', label: 'Total Holding Value' },
    { key: 'totalinvvalue', label: 'Total Investment Value' },
    { key: 'totalprofitandloss', label: 'Total Profit & Loss' },
    { key: 'totalpnlpercentage', label: 'Total PnL Percentage' },
    { key: 'totalTodayGain', label: 'Total Today Gain' },
  ];

  // Define possible stock metrics
  const stockMetrics = [
    { key: 'quantity', label: 'Quantity' },
    { key: 'averageprice', label: 'Average Price' },
    { key: 'overallPnL', label: 'Overall PnL' },
    { key: 'pnlpercentage', label: 'PnL Percentage' },
    { key: 'todayGain', label: 'Today Gain' },
  ];

  // State for selected portfolio metrics
  const [selectedPortfolioMetrics, setSelectedPortfolioMetrics] = useState<string[]>(
    portfolioMetrics.map((metric) => metric.key) // default all selected
  );

  // State for selected stock metrics
  const [selectedStockMetrics, setSelectedStockMetrics] = useState<string[]>(
    ['overallPnL'] // default overallPnL selected
  );

  // Handle portfolio metrics selection
  const handlePortfolioMetricChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;
    setSelectedPortfolioMetrics((prev) =>
      checked ? [...prev, name] : prev.filter((metric) => metric !== name)
    );
  };

  // Handle stock metrics selection
  const handleStockMetricChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelectedStockMetrics((prev) =>
      checked ? [...prev, name] : prev.filter((metric) => metric !== name)
    );
  };

  // Get unique dates from portfolio for the X-axis
  const labels = portfolioEntries.map((entry) => entry.date);

  // Prepare datasets for portfolio fields based on selection
  const portfolioDatasets = selectedPortfolioMetrics.map((metricKey) => {
    const metric = portfolioMetrics.find((m) => m.key === metricKey);
    if (!metric) return null;

    let borderColor = '';
    // Assign different colors based on metric
    switch (metricKey) {
      case 'totalholdingvalue':
        borderColor = 'rgba(75, 192, 192, 1)';
        break;
      case 'totalinvvalue':
        borderColor = 'rgba(153, 102, 255, 1)';
        break;
      case 'totalprofitandloss':
        borderColor = 'rgba(255, 159, 64, 1)';
        break;
      case 'totalpnlpercentage':
        borderColor = 'rgba(255, 99, 132, 1)';
        break;
      case 'totalTodayGain':
        borderColor = 'rgba(54, 162, 235, 1)';
        break;
      default:
        borderColor = 'rgba(0,0,0,1)';
    }

    return {
      label: metric.label,
      data: portfolioEntries.map((entry) => entry[metricKey as keyof PortfolioEntry] as number),
      borderColor: borderColor,
      fill: false,
      yAxisID: 'y1' as const,
    };
  }).filter((dataset): dataset is {
    label: string;
    data: number[];
    borderColor: string;
    fill: boolean;
    yAxisID: 'y1';
  } => dataset !== null);

  // Prepare datasets for stock portfolio fields based on selection
  const stockDatasets = selectedStockMetrics.flatMap((metricKey) => {
    const metric = stockMetrics.find((m) => m.key === metricKey);
    if (!metric) return [];

    return stockPortfolioEntries.map((stock: PortfolioStock) => {
      return {
        label: `${stock.stockName} ${metric.label}`,
        data: stock.entries.map((entry: StockEntry) => entry[metricKey as keyof StockEntry] as number),
        borderColor: getRandomColor(),
        fill: false,
        yAxisID: 'y2' as const,
      };
    });
  });

  // Combine all datasets
  const chartDatasets = [...portfolioDatasets, ...stockDatasets];

  // Memoize chart data to optimize performance
  const chartData: ChartData<'line', number[], string> = useMemo(() => {
    return {
      labels,
      datasets: chartDatasets,
    };
  }, [labels, chartDatasets]);

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to resize based on container
    plugins: {
      legend: {
        position: 'top' as const,
        onClick: function (
          _e: ChartEvent,
          legendItem: LegendItem<'line'>, // Provide the type argument
          _legend: LegendElement<'line'> // Provide the type argument
        ) {
          const index = legendItem.datasetIndex;
          if (index === undefined) return;

          const ci = this.chart;
          const meta = ci.getDatasetMeta(index);
          if (!meta) return;

          // Toggle the visibility
          meta.hidden = meta.hidden === null ? true : !meta.hidden;

          ci.update();
        },
      },
      title: {
        display: true,
        text: 'Portfolio and Stock Portfolio Overview',
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          // Customize tooltip labels
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${value}`;
          },
        },
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
        ticks: {
          maxRotation: 90,
          minRotation: 45,
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Portfolio Values',
        },
        beginAtZero: true,
      },
      y2: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis
        },
        title: {
          display: true,
          text: 'Stock Metrics',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100vh', padding: '20px', boxSizing: 'border-box' }}>
      {/* Selection Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
        {/* Portfolio Metrics Selection */}
        <div style={{ marginRight: '40px' }}>
          <h3>Portfolio Metrics</h3>
          {portfolioMetrics.map((metric) => (
            <div key={metric.key}>
              <label>
                <input
                  type="checkbox"
                  name={metric.key}
                  checked={selectedPortfolioMetrics.includes(metric.key)}
                  onChange={handlePortfolioMetricChange}
                />
                {metric.label}
              </label>
            </div>
          ))}
        </div>

        {/* Stock Metrics Selection */}
        <div>
          <h3>Stock Metrics</h3>
          {stockMetrics.map((metric) => (
            <div key={metric.key}>
              <label>
                <input
                  type="checkbox"
                  name={metric.key}
                  checked={selectedStockMetrics.includes(metric.key)}
                  onChange={handleStockMetricChange}
                />
                {metric.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Render the chart */}
      <Line data={chartData} options={options} />
    </div>
  );
};

// Utility function to generate random colors for stock datasets
const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
