import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserDataType } from '../../types/user-data';

export const getAuthorizationStatus = (state:State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): UserDataType | null => state[NameSpace.User].user;
export const getError = (state: State): string | null => state[NameSpace.User].error;
