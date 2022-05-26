import React from 'react';
import { Line } from 'react-chartjs-2';

const labels = ['January', 'February', 'March'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Dataset 2',
      data: [1, 2, 3],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 1)',
    },
  ],
};

export function DailyVotes() {
  return (
    <div style={{ maxWidth: '200px', maxHeight: '200px' }}>
      <Line data={data} />
    </div>
  );
}
