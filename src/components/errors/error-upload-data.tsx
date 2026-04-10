import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffersActions } from '../../store/api-actions';
import { getOffersError } from '../../store/offers/selectors';
import { errorUploadContainer, errorUploadText, errorUploadTitle } from './error-upload-data-style';

export const ErrorUploadData = (): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getOffersError);
  return (error ?
    <div style={errorUploadContainer}>
      <h1 style={errorUploadTitle}>Fail to load</h1>
      <button
        style={errorUploadText}
        type="button"
        onClick={() => {
          dispatch(fetchOffersActions());
        }}
      >
        Try again
      </button>
    </div> : null
  );
};
