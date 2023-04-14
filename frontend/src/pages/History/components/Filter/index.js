import styles from "./filter.module.css";
import { useState } from "react";

const Filter = ({ history, handleCallback }) => {
  const [orderBy, setOrderBy] = useState(true);
  function handleDelete(e) {
    handleCallback(e);
  }
  return (
    <>
      {/* <SunDim size={32} color="#dde3f0" />
      <Moon size={32} color="#dde3f0" /> */}
      <ul className={styles.stop_watch_filter}>
        <li>
          <button
            className={styles.filter}
            onClick={() => setOrderBy(!orderBy)}
            class="btn"
          >
            Ordernar por
          </button>

          {orderBy && (
            <ul>
              <li className={styles.wrapper}>
                <label htmlFor="desc">Desc</label> {" "}
                <input
                  type="radio"
                  id="desc"
                  name="order"
                  value="decrescente"
                  checked
                />
              </li>
              <li className={styles.wrapper}>
                <label htmlFor="asc">Asc</label>
                  <input type="radio" id="asc" name="order" value="crescente" />
              </li>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export { Filter };
