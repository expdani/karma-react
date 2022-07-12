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
    main: '#d4af37',
    contrastDefaultColor: 'light',
  },
  discord: {
    main: '#7289da',
    contrastDefaultColor: 'light',
  },
  text: {
    primary: '#EFEFEF',
    secondary: '#83839a',
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
