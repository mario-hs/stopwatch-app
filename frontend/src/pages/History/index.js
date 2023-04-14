import styles from "./stopwatch.module.css";
// import { useFetchGet } from "../../hooks/useFecth/UseFetchGet";
import { useEffect, useState } from "react";
import api from "../../services/Api";
import { Time } from "./components/Time";
import { usePage } from "../../hooks/contexts/PageContext";

const History = () => {
  const [history, setHistory] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { togglePage } = usePage();

  useEffect(() => {
    if (history == null) {
      getDataApi();
    }
    togglePage("story");
  }, [history]);

  const handleDelete = (id) => {
    const abortCont = new AbortController();
    setTimeout(() => {
      api
        .delete(`time/${id}`)
        .then((res) => {
          if (!res.status === 200) {
            throw Error("Não foi possível buscar os dados para esse recurso");
          }
          return res;
        })
        .then(() => {
          setHistory((history) => history.filter((time) => time.id !== id));
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });

      return () => abortCont.abort();
    }, 1000);
  };

  const getDataApi = () => {
    const abortCont = new AbortController();
    setTimeout(() => {
      api
        .get("time")
        .then((res) => {
          if (!res.status === 200) {
            throw Error("Não foi possível buscar os dados para esse recurso");
          }
          return res;
        })
        .then(({ data }) => {
          setHistory(data.times);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });

      return () => abortCont.abort();
    }, 1000);
  };

  return (
    <main className={styles.stop_watch}>
      <ul className={styles.stop_watch_history}>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {history && <Time history={history} handleCallback={handleDelete} />}
      </ul>
    </main>
  );
};

export { History };
