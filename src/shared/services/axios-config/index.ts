import axios, { AxiosError, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.response.use( 
  response => responseInterceptor(response),
  response => errorInterceptor(response),

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
  