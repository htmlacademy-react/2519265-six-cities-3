import { Link } from 'react-router-dom';
import { notFoundLink, notFoundTitle } from './not-found-style';

export default function NotFound(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <div className="container">
        <h1 style={notFoundTitle}>404 Not Found</h1>
        <div>
          <Link style={notFoundLink} to="/">Вернуться на главную</Link>
        </div>
      </div>
    </main>
  );
}
