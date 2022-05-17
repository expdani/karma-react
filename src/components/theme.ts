import { createTheme } from '@mui/material';

export const palette = {
  primary: {
    main: '#E84545',
    contrastDefaultColor: 'light',
  },
  secondary: {
    main: '#2B2E4A',
    contrastDefaultColor: 'light',
  },
  tertiary: {
    main: '#903749',
    contrastDefaultColor: 'light',
  },
  quaternary: {
    main: '#53354A',
    contrastDefaultColor: 'light',
  },
  font: {
    primary: '#F5F2F5',
  },
};

export const font = {
  main: 'Roboto',
  secondary: 'Roboto',
};

const myTheme = createTheme({
  palette,
});

export default createTheme(myTheme);
