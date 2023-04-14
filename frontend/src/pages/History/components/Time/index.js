import { Calendar, Trash } from "@phosphor-icons/react";
import styles from "./time.module.css";

const Time = ({ history, handleCallback }) => {
  function handleDelete(e) {
    handleCallback(e);
  }
  return (
    <>
      {history.map((time) => {
        const date = new Date(time.date);
        const meses = [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ];
        let dateFormatted =
          date.getDate() +
          " " +
          meses[date.getMonth()] +
          " " +
          date.getFullYear();

        return (
          <li className={styles.wrapper_time} key={`time_${time.id}`}>
            <div className={styles.top}>
              <div className={styles.date}>
                <Calendar size={24} />
                {dateFormatted}
              </div>
              <Trash size={24} onClick={() => handleDelete(time.id)} />
            </div>
            <p className={styles.time}>
              {("0" + Math.floor((time.time / 60000) % 60)).slice(-2)}:
              {("0" + Math.floor((time.time / 1000) % 60)).slice(-2)}:
              {("0" + ((time.time / 10) % 100)).slice(-2)}
            </p>
          </li>
        );
      })}
    </>
  );
};

export { Time };
