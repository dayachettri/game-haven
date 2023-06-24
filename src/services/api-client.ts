import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '29db4fb0f4964ee9a1d3693d10b865b8',
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  };

  get = (slug: number | string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${slug}`)
      .then(res => res.data);
  };
}

export default APIClient;
