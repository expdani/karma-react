import React from 'react';
import { styled } from '@mui/material/styles';

type Props = {
  title: string;
};

const Title = styled('h1')(({ theme }) => ({
  fontSize: '30px',
  padding: 0,
  margin: ' 0 0 16px',
}));

export default function PageTitle(props: Props): any {
  const { title } = props;

  return <Title>{title}</Title>;
}
