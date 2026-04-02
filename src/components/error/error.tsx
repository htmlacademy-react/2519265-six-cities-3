import { useAppSelector } from '../../hooks';
import { errorStyle } from './error-style';

export default function Error (): JSX.Element | null {
  const error = useAppSelector((state) => state.errors);
  return (error) ? <div style={errorStyle}>Возникла ошибка {error}</div> : null;
}
