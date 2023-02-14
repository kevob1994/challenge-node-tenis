import axios, { AxiosRequestConfig } from 'axios';
import { QueryCache } from 'react-query';

const queryCache = new QueryCache();

interface useClientI {
  client: ClientI;
}

type EndpointRequest = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ClientI {
  <T>(
    endpoint: string,
    type?: EndpointRequest,
    options?: {
      isAuthRequired?: boolean;
      data?: any;
      isMultipartForm?: boolean;
    }
  ): Promise<T>;
}

const API_URL = import.meta.env.VITE_API_URL || 'VITE_API_URL';

export const useClient = (): useClientI => {
  const client: ClientI = async (
    endpoint,
    type = 'GET',
    { data, isAuthRequired } = {}
  ) => {
    const config: AxiosRequestConfig = {
      method: type,
      url: `${API_URL}/${endpoint}`,
      data,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    if (isAuthRequired) {
      const tokenStorage = localStorage.getItem('token');

      if (tokenStorage) {
        const token = await JSON.parse(tokenStorage);
        config.headers!.Authorization = `Bearer ${token}`;
      }
    }

    const response = await axios(config);

    switch (response.status) {
      case 401:
        queryCache.clear();
        return Promise.reject({ message: 'Please re-authenticate.' });

      case 404:
        return Promise.reject({ message: 'Not found.' });

      case 200:
      case 201:
        return response.data;

      default:
        return Promise.reject({ message: 'Server unavailable.' });
    }
  };

  return { client };
};
