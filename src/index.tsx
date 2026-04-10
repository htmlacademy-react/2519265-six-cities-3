import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorAuthorization from './components/errors/error-authorization';
import { checkAuthActions, fetchFavoriteOfferActions, fetchOffersActions } from './store/api-actions';

store.dispatch(fetchOffersActions());
store.dispatch(checkAuthActions());
store.dispatch(fetchFavoriteOfferActions());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorAuthorization/>
      <App />
    </Provider>
  </React.StrictMode>,
);
