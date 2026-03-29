import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { user } from './mosks/user';
import { comments } from './mosks/comments';
import { offers } from './mosks/offers';
import { Provider } from 'react-redux';
import { store } from './store';
import Error from './components/error';
import { checkAuthActions, fetchOffersActions } from './store/api-actions';

store.dispatch(fetchOffersActions());
store.dispatch(checkAuthActions());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error />
      <App
        user={user}
        comments={comments}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>,
);
