import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

//https://cors-anywhere.herokuapp.com/
const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://glacial-falls-21490.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
