import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app';
import { user } from './mosks/user';
import { comments } from './mosks/comments';
import { offers } from './mosks/offers';

export const Setting = {
  PlacesCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PlacesCount}
      user={user}
      comments={comments}
      offers={offers}
    />
  </React.StrictMode>,
);
