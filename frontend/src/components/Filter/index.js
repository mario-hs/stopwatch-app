import { SlidersHorizontal } from "@phosphor-icons/react";
import styles from "./filter.module.css";
// import { SlidersHorizontal } from "@phosphor-icons/react";

import { useState } from "react";

const Filter = ({ handleCallback }) => {
  const [orderBy, setOrderBy] = useState(false);
  const [filter, setFilter] = useState({ type: "all", order: true });

  function handleOnChange(prop, value) {
    if (prop === "order") {
      filter[prop] = value;
      setFilter({ ...filter });
    } else {
      filter[prop] = value;
      setFilter({ ...filter });
    }
    console.log(filter);
  }

  function handleOnClick() {
    setOrderBy(!orderBy);

    if (orderBy) handleCallback(filter.type);
  }
  console.log(filter);

  return (
    <>
      <div className={styles.stop_watch_filter}>
        <button onClick={handleOnClick} class="btn">
          <SlidersHorizontal size={28} />
        </button>

        {orderBy && (
          <ul className={styles.container_filter}>
            <li className={styles.wrapper}>
              <label htmlFor="desc">Desc</label> 
              <input
                type="radio"
                id="desc"
                name="order"
                value="decrescente"
                defaultChecked={filter.order === true}
                onChange={() => {
                  handleOnChange("order", true);
                }}
              />
            </li>
            <li className={styles.wrapper}>
              <label htmlFor="asc">Asc</label>
              <input
                type="radio"
                id="asc"
                name="order"
                defaultChecked={filter.order === false}
                onChange={() => {
                  handleOnChange("order", false);
                }}
                value="crescente"
              />
            </li>
            <li>
              <select
                name="filter"
                id="filter"
                onChange={(e) => {
                  handleOnChange("type", e.target.value);
                }}
                defaultValue={filter.type}
              >
                <option defaultChecked disabled>
                  Selecione um tipo de filtro
                </option>
                <option value="all"> Todos</option>
                <option value="date">por Data</option>
                <option value="period">por Periodo</option>
              </select>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export { Filter };
