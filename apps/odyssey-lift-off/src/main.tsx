import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import Pages from './app/pages';
import GlobalStyles from './app/styles';
import { environment } from './environments/environment';

const client = new ApolloClient({
  uri: environment.apiUrl,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);
