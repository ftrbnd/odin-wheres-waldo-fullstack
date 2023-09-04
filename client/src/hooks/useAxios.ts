/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const useAxios = <T>(config: AxiosRequestConfig<any>) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const request = () => fetchData();

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios(config);
      setError('');
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
};

export default useAxios;
