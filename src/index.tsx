import * as React from 'react';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import App from './App';
import { AUTH_TOKEN } from './components/constants';
import theme from './theme';
import * as config from '../config.json';

// TODO: to .env file
const httpLink = new HttpLink({
  uri: config.endpoint,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'network-only',
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          variant="success"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
