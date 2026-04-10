import { store } from '../store';
import { clearErrorsAction } from '../store/api-actions';
import { setErrors } from '../store/user-process/user-process';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setErrors(message));
  store.dispatch(clearErrorsAction());
};
