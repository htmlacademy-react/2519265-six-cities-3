import { useAppSelector } from '../../hooks';
import { getError } from '../../store/user-process/selectors';
import { errorStyle } from './error-style';

export default function Error (): JSX.Element | null {
  const error = useAppSelector(getError);
  return (error) ? <div style={errorStyle}>Возникла ошибка {error}</div> : null;
}
