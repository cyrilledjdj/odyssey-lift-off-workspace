import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Pages from './app/pages';
import GlobalStyles from './app/styles';
import { environment } from './environments/environment';

const client = new ApolloClient({
  uri: environment.apiUrl,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);
