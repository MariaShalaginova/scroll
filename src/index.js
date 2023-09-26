import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './App';
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);


