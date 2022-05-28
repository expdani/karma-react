import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box, Card, CardContent } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Upvotes', 'Downvotes'],
  datasets: [
    {
      fill: true,
      pointRadius: 0,
      label: '# of votes',
      data: [12, 19],
      backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
};

export function VotesPie() {
  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card>
        <CardContent>
          <Pie data={data} />
        </CardContent>
      </Card>
    </Box>
  );
}
