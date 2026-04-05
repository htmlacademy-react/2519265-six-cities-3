import { AuthorizationStatus, NAME_SPACE } from '../../const';
import { State } from '../../types/state';
import { UserDataType } from '../../types/user-data';

export const getAuthorizationStatus = (state:State): AuthorizationStatus => state[NAME_SPACE.User].authorizationStatus;
export const getUser = (state: State): UserDataType | null => state[NAME_SPACE.User].user;
export const getError = (state: State): string | null => state[NAME_SPACE.User].error;
