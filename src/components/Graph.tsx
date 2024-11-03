// src/components/Graph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';

type GraphProps = {
  data: any;
};

export const Graph: React.FC<GraphProps> = ({ data }) => {
  if (!data) return null;

  const chartData = {
    labels: data.map((item: any) => item.date),
    datasets: [
      {
        label: 'Portfolio Value',
        data: data.map((item: any) => item.value),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};
