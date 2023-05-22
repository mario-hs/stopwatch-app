import { Moon, SunDim } from "@phosphor-icons/react";
import styles from "./header.module.css";
import { Filter } from "../Filter";
import { useTheme } from "../../hooks/contexts/ThemeContext";
import { usePage } from "../../hooks/contexts/PageContext";
import { useState } from "react";
import { useData } from "../../hooks/contexts/DataContent";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { filter, setFilter, filterHistory } = useData();
  const [inputs, setInputs] = useState("all");

  const { page } = usePage();

  function handleFilter(filters) {
    setFilter({ ...filters });
  }

  function handleOnSubmit() {
    filterHistory();
  }

  function handleOnChange(prop, value) {
    if (prop === "startDate") {
      filter[prop] = value;
      setFilter({ ...filter });
    } else {
      filter["endDate"] = value;
      setFilter({ ...filter });
    }
  }

  return (
    <header>
      <div
        className={styles.container_header}
        style={
          page === "index"
            ? { justifyContent: "center" }
            : { justifyContent: "space-between" }
        }
      >
        {page === "story" && <Filter handleCallback={handleFilter} />}

        {theme === "dark" ? (
          <SunDim size={28} onClick={toggleTheme} weight="duotone" />
        ) : (
          <Moon size={28} onClick={toggleTheme} weight="duotone" />
        )}
      </div>
      {page === "story" && (
        <>
          <div
            className={styles.wrapper_inputs}
            style={
              filter.type === "all" ? { opacity: 0, pointerEvents: "none" } : {}
            }
          >
            <input
              type="date"
              name="comeco"
              id="startDate"
              onChange={(e) => {
                handleOnChange("startDate", e.target.value);
              }}
            />
            {filter.type === "period" && (
              <input
                type="date"
                name="fim"
                id="endDate"
                onChange={(e) => {
                  handleOnChange("endDate", e.target.value);
                }}
              />
            )}
          </div>
          <button
            className={styles.button_filter}
            type="submit"
            onClick={handleOnSubmit}
          >
            Filtrar
          </button>
        </>
      )}
    </header>
  );
};

export { Header };
