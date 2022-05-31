import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box, Card, CardContent } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  title: string;
  labels: string[];
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
  fill: boolean;
};
export default function PieChart(props: Props): any {
  const {
    title,
    labels,
    data,
    backgroundColor,
    borderColor,
    borderWidth,
    fill,
  } = props;

  const pieData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderColor,
        borderWidth,
        fill,
        pointRadius: 0,
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card>
        <CardContent>
          <Box sx={{ color: 'text.secondary' }}>{title}</Box>
          <Pie data={pieData} />
        </CardContent>
      </Card>
    </Box>
  );
}
