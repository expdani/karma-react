import { createTheme } from '@mui/material';

export const palette = {
  // primary: {
  //   main: '#205375',
  //   contrastDefaultColor: 'light',
  // },
  // secondary: {
  //   main: '#205375',
  //   contrastDefaultColor: 'light',
  // },
  // text: {
  //   primary: '#EFEFEF',
  //   secondary: '#EFEFEF',
  // },
  // background: {
  //   default: '#191919',
  //   // paper: '#1167b1',
  // },
};

export const font = {
  main: 'Roboto',
  secondary: 'Roboto',
};

const theme = createTheme({
  palette: { ...palette },
});

export default createTheme(theme);
