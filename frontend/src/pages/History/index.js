import styles from "./stopwatch.module.css";
// import { useFetchGet } from "../../hooks/useFecth/UseFetchGet";
import { useEffect, useState } from "react";
import api from "../../services/Api";
import { Time } from "./components/Time";
import { usePage } from "../../hooks/contexts/PageContext";
import { useData } from "../../hooks/contexts/DataContent";

const History = () => {
  const { historyFilter, setHistory, setHistoryFilter } = useData();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { togglePage } = usePage();

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
          setHistoryFilter(data.times);
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

  useEffect(() => {
    if (historyFilter === undefined) {
      setIsPending(true);
      getDataApi();
    }
    togglePage("story");
  }, [historyFilter]);

  return (
    <main className={styles.stop_watch}>
      <ul className={styles.stop_watch_history}>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {historyFilter && (
          <Time history={historyFilter} handleCallback={handleDelete} />
        )}
      </ul>
    </main>
  );
};

export { History };
