import { Link } from 'react-router-dom';
import Header from '../components/header/header';

export default function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <div className="cities__places-container container">
          <h1>Not Fount Page</h1>
          <div>
            <Link to="/">Вернуться на главную</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
