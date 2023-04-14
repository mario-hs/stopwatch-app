import { useEffect, useState } from "react";
import api from "../../services/Api";

export const useFetchGet = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      api
        .get(url)
        .then((res) => {
          if (!res.status === 200) {
            throw Error("Não foi possível buscar os dados para esse recurso");
          }
          return res;
        })
        .then((data) => {
          setData(data.data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });

      return () => abortCont.abort();
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};
