import { createTheme } from '@mui/material';

export const palette = {
  primary: {
    main: '#f71953',
    contrastDefaultColor: 'light',
  },
  secondary: {
    main: '#205375',
    contrastDefaultColor: 'light',
  },
  gold: {
    main: '#f5b34a',
    dark: '#f5b34a',
    contrastDefaultColor: 'light',
  },
  money: {
    main: '#4abd53',
    dark: '#4abd53',
    contrastDefaultColor: 'light',
  },
  discord: {
    main: '#7289da',
    dark: '#7289da',
    contrastDefaultColor: 'light',
  },
  minigames: {
    main: '#a789fc',
    dark: '#a789fc',
    contrastDefaultColor: 'light',
  },
  text: {
    primary: '#EFEFEF',
    secondary: '#d5d6d8',
    carousel: '#7a7f94',
    disabled: '#aeb0b3',
  },
  background: {
    default: '#191c27',
    paper: '#1e242f',
  },
};

export const font = {
  main: 'Roboto',
  secondary: 'Roboto',
};

const theme = createTheme({
  palette: { ...palette },
});

export default createTheme(theme);
