import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(config) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Reset Conditions
    setIsLoading(true);
    setIsError(false);
    setData([]);

    if (config?.params?.query?.length > 1) {
      axios
        .request(config)
        .then((res) => {
          if (res?.data?.suggestions?.[0]) {
            setData(res.data.suggestions[0].entities);
          } else {
            setData([]);
          }

          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(`An error occurred. ${err}`);
          setIsLoading(false);
        });
    }
  }, [config]);

  return { data, isLoading, isError };
}

export default useFetch;
