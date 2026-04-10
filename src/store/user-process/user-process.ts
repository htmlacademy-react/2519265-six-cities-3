import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProcessType } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../const';
import { checkAuthActions, clearErrorsAction, loginUser, logoutUser } from '../api-actions';

const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setErrors:(state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthActions.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthActions.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.error = action.payload ?? 'Ошибка авторизации';
      })
      .addCase(clearErrorsAction.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  },
});

export const {setErrors} = userProcess.actions;
