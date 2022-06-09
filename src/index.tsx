import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import RouteSwitch from './RouteSwitch';
import { store } from './store/store';
import LocalStorageWrapper from './components/LocalStorageWrapper/LocalStorageWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalStorageWrapper>
        <RouteSwitch />
      </LocalStorageWrapper>
    </Provider>
  </React.StrictMode>,
);
