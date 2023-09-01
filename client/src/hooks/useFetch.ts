import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(url);
        setData(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, reload]);

  const refetch = () => setReload((prev) => prev + 1); // trigger render

  return { data, loading, error, refetch };
}

export default useFetch;
