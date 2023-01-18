import axios from 'axios';

export const AxiosApi: any = () => {
  const api = axios.create({
    baseURL: 'https://exampleapi.com.co',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return api;
};

export const instanceApi = AxiosApi();
