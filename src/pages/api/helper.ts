import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({
  // baseURL: 'https://api.promptapi.com/whois/query?domain=',
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
    apikey: process.env.PROMPT_APIKEY,
  },
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default instance;
