import { useAppSelector } from '../../hooks';
import { getError } from '../../store/user-process/selectors';
import { errorStyle } from './error-authorization-style';

export default function ErrorAuthorization (): JSX.Element | null {
  const error = useAppSelector(getError);
  return (error) ? <div style={errorStyle}>Возникла ошибка {error}</div> : null;
}
