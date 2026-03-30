import { useAppSelector } from '../hooks';

export default function Error (): JSX.Element | null {
  const error = useAppSelector((state) => state.errors);
  return (error) ? <div>Возникла ошибка {error}</div> : null;
}
