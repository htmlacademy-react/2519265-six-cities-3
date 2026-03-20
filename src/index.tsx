import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app';
import { user } from './mosks/user';
import { comments } from './mosks/comments';
import { offers } from './mosks/offers';
import { AuthorizationStatus } from './const';

const getAuthorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      user={user}
      comments={comments}
      offers={offers}
      authorizationStatus={getAuthorizationStatus}
    />
  </React.StrictMode>,
);
