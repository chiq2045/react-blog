import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { App } from './app';
import 'cirrus-ui';
import './index.css';
import {client, devClient} from 'utils/client';

render(
  <ApolloProvider client={process.env.CLIENT === 'dev' ? devClient : client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#blog')
);
