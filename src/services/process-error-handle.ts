import { store } from '../store';
import { setErrors } from '../store/actions';
import { clearErrorsAction } from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setErrors(message));
  store.dispatch(clearErrorsAction());
};
