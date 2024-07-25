"use client";


import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

const PieChart = () => {
  const data = {
    labels: ['Early Stage', 'Label 2', 'Mid Stage', 'Late Stage'],
    datasets: [
      {
        data: [30, 10, 20,40],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#9dd000'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#9dd000'],
      },
    ],
  };

  const options = {
    // You can customize chart options here
  };

  return <Doughnut data={data} options={options} />;
};

export default PieChart;