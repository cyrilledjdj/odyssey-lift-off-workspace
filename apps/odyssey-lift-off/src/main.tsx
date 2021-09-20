import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import GlobalStyles from './app/styles';
import Pages from './app/pages';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <Pages />
  </StrictMode>,
  document.getElementById('root')
);
