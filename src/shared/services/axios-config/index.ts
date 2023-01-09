import axios, { AxiosError, AxiosResponse } from 'axios';

import { Environment } from '../../environment';

const { URL_BASE } = Environment;

const api = axios.create({
  baseURL: URL_BASE
});


api.interceptors.response.use( 
  response => responseInterceptor(response),
  error => errorInterceptor(error),

);

const responseInterceptor = (res: AxiosResponse) => {
  return res;
};
 
const errorInterceptor = (error: AxiosError) => {

  if(error.message === 'Network Error') {
    return Promise.reject(new Error('Erro de coneção.'));
  }

  if(error.response?.status === 401) {
    // tratar erro de autorização
  }

  return Promise.reject(error);
};

export { api };
  