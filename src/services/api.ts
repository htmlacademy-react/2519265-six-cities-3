import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandle } from './process-error-handle';

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

export const sholdDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';

export const TIMEOUT = 5000;

export const createAPI = ():AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if(token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if(error.response && sholdDisplayError(error.response)) {
        processErrorHandle(error.response.data.error);
      }
      throw error;
    }
  );
  return api;
};

