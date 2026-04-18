import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { memo } from 'react';

export const Footer = memo(
  (): JSX.Element => (
    <footer className="footer">
      <Link className="footer__logo-link" to={AppRoute.Main}>
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </Link>
    </footer>
  ),
);

Footer.displayName = 'Footer';
